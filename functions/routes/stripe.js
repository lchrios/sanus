
const Stripe = require('stripe')

/**La private key será utilizada con una variable de entorno */
const stripe = new Stripe('sk_test_51HwA9iItRYlC7M0MQNS8OacWDR17Hgnaf9yXvLOt9QCTfQCtvzD6JDaWnM0dJ9cDivQtGGj53a9keJpimeZps4r500rXFO4372')

exports.sendPaymentInfo = (req, res) => {
  const {amount} = req.body;
  
    stripe.paymentIntents.create({
      amount,
      currency:'mxn',
      description: 'Sesión individual',
      payment_method_types: ['card', 'oxxo'],
    })
    .then((paymentIntent) => {
      (res.status(200).send({client_secret: paymentIntent.client_secret,message: 'pago exitoso'}))
    }) 
    .catch((error) => {
      res.status(404).send(error)
      console.log('Error al procesar tu pago')
    })
    
    
    // (res.status(200).send(paymentIntent.client_secret)
    // )
  }
    
  //   exports.getSecret = async (req, res) => {
  //   const {amount} = req.body;
  //   const paymentIntent = await stripe.paymentIntents.create({
  //     amount,
  //     currency:'mxn',
  //     description: 'Sesión individual',
  //     payment_method_types: ['oxxo'],
  //   })
  //   .then(res => {console.log(paymentIntent.client_secret)})
  //   .catch((error) => {
  //   console.log('Error al procesar tu pago')
  //   console.error()
  // })
  

  // (res.status(200).send(paymentIntent)
  // )}