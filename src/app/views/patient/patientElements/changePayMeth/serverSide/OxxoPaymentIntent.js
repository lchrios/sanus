const Stripe = require('stripe')
const stripe = Stripe('sk_test_51HwA9iItRYlC7M0MQNS8OacWDR17Hgnaf9yXvLOt9QCTfQCtvzD6JDaWnM0dJ9cDivQtGGj53a9keJpimeZps4r500rXFO4372')

const paymentIntent = await stripe.paymentIntents.create({
   amount: 600,
   currency: 'mxn',
   payment_method_types: ['oxxo'],
});
