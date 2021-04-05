const stripe = require('stripe')("sk_test_51IRM5vEkM6QFZKw2N9Ow9xCKwSd2b8J3JjWb2BL9kH5FVCXvJ5fSmFW6GvJot90XsUdgSfbtpPraG5u9Kmycvi5C00HIcjkWgG");

/**La private key será utilizada con una variable de entorno */

exports.sendPaymentInfo = (req, res) => {
    // TODO: Sacar el payment ID y ponerlo en el usuario 
      const { amount } = req.body;
  
    stripe.paymentIntents.create({
        amount,
        currency:'mxn',
        description: 'Sesión individual',
        payment_method_types: ['card', 'oxxo'],
    })
    .then((paymentIntent) => {
        console.log("Ticket de pago generado exitosamente api")
        return res.status(200).send({
            client_secret: paymentIntent.client_secret, 
            message: 'Ticket de pago generato exitosamente'
        })
    })
    .catch((error) => {
        console.log('Error al procesar tu pago')
        res.status(400).send(error)
    })
} 

exports.handleStripeEvent = (req, res) => {
    const sig = req.headers['stripe-signature']; // @Signature de la API de Stripe

    //0-testCLI 1-stripe-test 2-stripe live mode @Secreto del endpoint webhook
    const endpoint_secret = ["whsec_OMF9oQSkPJsmHdMFJlTsWYe8pgLahNBd","whsec_CObnwxUSvfRajVBO08viht8UpZNRXWhI", "whsec_fwfyWE5QTrOkBJZ7mEfU3LxgsOwhkpvy"][1]; 
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

    console.log(event)

    switch(event.type) {
        case 'payment_intent.succeeded':
            console.log("Pago recibido con " + event["payment_method_types"])
            // * Se hizo el pago del voucher del OXXO exitosamente 
            break;
            
        case 'payment_intent.requires_action':
            // * Se genero el voucher del OXXO
            console.log("Voucher generado")
            // - 1 Crear sesion en firestore con valor
            // - 

        case 'payment_intent.processing':
            // * Se esta procesando el outcome del pago
            console.log("Voucher en proceso")
            break;

        case 'payment_intent.payment_failed':
            // * No se hizo el pago exitosamente :C
            console.log("Pago no realizado")
            break;
                    
        
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    return res.status(200).send({received: true});
}

exports.createCheckoutSession = (req, res) => {
    stripe.checkout.sessions.create({
        payment_method_types: [ 'card' ],
        line_items: [ 
            {
                price_data: {
                    currency:'mxn',
                    /**
                     * TODO ASIGNAR UN ID NUMÉRICO
                     */
                    product:'simplesession-id',
                    product_data: {
                        name:'Sesión simple',
                        description:'Paga por una sesión con el terapeuta que seleccionaste'
                    },
                    unit_amount: 60000 /** 
                    *!!! lo puse abajo pa que se vea el color, la cantidad del unit_amount, está en centavos, por eso se usa ese numero */
                },
                adjustable_quantity:enabled,
            }
        ],
        mode:'payment',
        success_url: req.host + '/pago_exitoso?id={CHECKOUT_SESSION_ID}',
        cancel_url: 'http://localhost:4242/pago_cancelado?id={CHECKOUT_SESSION_ID}'
    }).then( session => {
        res.status(200).send({id: session.id})
    }) 
}