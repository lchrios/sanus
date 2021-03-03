
const Stripe = require('stripe')

/**La private key será utilizada con una variable de entorno */
const stripe = new Stripe('sk_test_51HwA9iItRYlC7M0MQNS8OacWDR17Hgnaf9yXvLOt9QCTfQCtvzD6JDaWnM0dJ9cDivQtGGj53a9keJpimeZps4r500rXFO4372')
exports.sendPaymentInfo = (req, res) => {
  const {amount, paymentMethod} = req.body;


  stripe.paymentIntents.create({
    amount,
    currency:'mxn',
    description: 'Sesión individual',
    payment_method: paymentMethod
  }).catch((error) => {
    console.log('Error al procesar tu pago')
    console.error()
  })
  
  res.status(200).send ({message:'Pago exitoso'});

}