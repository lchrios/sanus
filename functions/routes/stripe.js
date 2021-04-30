const stripe = require('stripe')("sk_test_51IRM5vEkM6QFZKw2N9Ow9xCKwSd2b8J3JjWb2BL9kH5FVCXvJ5fSmFW6GvJot90XsUdgSfbtpPraG5u9Kmycvi5C00HIcjkWgG");

const { admin, storage } = require('../firebase');
var db = admin.firestore();
var thers = db.collection('therapists');
var users = db.collection('users');
var sess = db.collection('sessions');

/**La private key será utilizada con una variable de entorno */

exports.sendPaymentInfo = (req, res) => {

    const { amount, email, payment_method_id } = req.body

    users.doc(req.params.uid).get()
    .then(doc => {
        let pm = doc.data().payment_met;
        pm.push(payment_method_id)
        doc.ref.update({payment_met: pm})
        .then(() => {
            console.log("PMs actualizados")
        })
        .catch(er => {
            console.error(er.message);
        })
        thers.doc(doc.data().therapist).get().then(ther => {
            console.log(ther.data())
            stripe.paymentIntents.create({
                "amount": amount,
                "currency": 'mxn',
                "description": 'Sesión individual',
                "payment_method": payment_method_id,
                "application_fee_amount": 10000,
                "transfer_data": {
                    "destination": ther.data().stripeId,
                },
                "payment_method_types": ['card', 'oxxo'],
                "receipt_email": email,
            })
            .then((paymentIntent) => {
            console.log(paymentIntent.receipt_email, "Ticket de pago generado exitosamente api")
            return res.status(200).send({
                "client_secret": paymentIntent.client_secret, 
                    "message": 'Ticket de pago generato exitosamente'
                })
            })
            .catch((error) => {
                console.log('Error al crear el intento de pago',error.message)
                res.status(400).send(error)
            })
            
        })
        .catch((error) => {
            console.log('Error al obtener los datos de el terapeuta del usuario',error.message)
            res.status(400).send(error)
        })
    })
} 

exports.handleStripeEvent = (req, res) => { // * Código que maneja el otso
    const sig = req.headers['stripe-signature']; // @Signature de la API de Stripe

    //0-testCLI 1-stripe-test 2-stripe live mode @Secreto del endpoint webhook
    const endpoint_secret = [
        "whsec_OMF9oQSkPJsmHdMFJlTsWYe8pgLahNBd",
        "whsec_CObnwxUSvfRajVBO08viht8UpZNRXWhI", 
        "whsec_fwfyWE5QTrOkBJZ7mEfU3LxgsOwhkpvy"
    ][1]; 
    
    let event = req.body; // @ Lee la información enviada

    try { 
        /* 
          * Se construye unevento a traves de stripe pasando como argumentos:
            @ Signature de stripe
            @ secreto del endpoint
            @ Informacion obtenida del POST
        */
        event = stripe.webhooks.constructEvent(req.body, sig, endpoint_secret);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch(event.type) {
        case 'payment_intent.succeeded':
            
            console.log("Pago recibido con " + event["payment_method_types"])
            
            // * Se hizo el pago del voucher del OXXO exitosamente 
            sess.where("pay_met", "==", event.id).get()
            .then(query => {
                query.forEach(doc => {
                    doc.ref.update({payed: true})
                    .then(() => {
                        return res.status(200).send({received: true});
                    })
                })
            })
            break;
            
        case 'payment_intent.requires_action':
            
            // * Se genero el voucher del OXXO
            console.log("Voucher generado");
            return res.status(200).send({received: true});

        case 'payment_intent.processing':
            // * Se esta procesando el outcome del pago
            console.log("Voucher en proceso")
            return res.status(200).send({received: true});

        case 'payment_intent.payment_failed':
            // * No se hizo el pago exitosamente :C
            console.log("Pago no realizado")
            return res.status(200).send({received: true});
                    
        
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
            return res.status(200).send({received: true});
    }
}

exports.expressAccount = (req, res) => {
    const { email } = req.body;

    const account = stripe.accounts.create({
        type:'express',
        email: email,
        country: 'MX',
        business_type: 'individual'
    })
    .then(response => {
        /**
         * TODO MOVER TEST DATA
         */
        const host = [
            'http://localhost:9999/iknelia-3cd8e/us-central1/api', // * local emulator dev host
            'https://iknelia.app' // * cloud api host
          ][1]

        thers.doc(req.params.tid).update({stripeId:response.id, charges_enabled:response.charges_enabled})
        .then(() =>console.log('Actualización de stripeID completada.')
        ).catch(err => console.error(err))


        stripe.accountLinks.create({
            account: response.id,
            refresh_url: `${host}/${req.params.tid}/reAuth`,
            return_url: `${host}/${req.params.tid}/dashboard`,
            type:"account_onboarding"

        }).then(response1 => {
            console.log("Enviando link")
    
            return res.status(200).send(response1)
        })
    })
    .catch(e => {
        console.error('No ha sido posible crear tu cuenta')
        console.error(e)
    })
}

exports.connectReAuth = (req,res) => {
    thers.doc(req.params.tid).get().then(doc => {

        if (!doc.data().charges_enabled) {
            stripe.accounts.retrieve(
                doc.data().stripeId
            ).then(account => {
                console.log(account)
                return res.status(200).send({ charges_enabled: account.charges_enabled })
            })
        }
        return res.status(200).send({charges_enabled: doc.data().charges_enabled })
    })
    .catch(e => {
        console.error('No ha sido posible traer tus datos')
        console.error(e)
    })
}

// exports.reAuth = (req,res) => {
//     const {email} = req.body

//     const account = stripe.accounts.create({
//         type:'express',
//         email: email,
//         capabilities: {
//             card_payments: {requested:true},
//             transfers: {requested:true}
//         }
//     })

// }
