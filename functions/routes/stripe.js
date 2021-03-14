const stripe = require('stripe')('sk_test_51HwA9iItRYlC7M0MQNS8OacWDR17Hgnaf9yXvLOt9QCTfQCtvzD6JDaWnM0dJ9cDivQtGGj53a9keJpimeZps4r500rXFO4372')

/**La private key será utilizada con una variable de entorno */

exports.sendPaymentInfo = (req, res) => {
      const { amount } = req.body;
  
    stripe.paymentIntents.create({
        amount,
        currency:'mxn',
        description: 'Sesión individual',
        payment_method_types: ['card', 'oxxo'],
    })
    .then((paymentIntent) => {
        console.log("Ticket de pago generado exitosamente")
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
    const sig = req.headers['stripe-signature'];
    const endpoint_secret = "whsec_0gqlUqNwq6LAXKqhSIYMBQTPB7UQOlaH";
    let event = req.body;

    // TODO: Arreglar la validacion 
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpoint_secret);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch(event.type) {
        case 'payment_intent.succeeded':
            console.log("Pago recibido con " + event["payment_method_types"])
            // * Se hizo el pago exitosamente
            break;
            
        case 'payment_intent.requires_action':
            // * Se genero voucher del OXXO
            console.log("Voucher generado")
            break;

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