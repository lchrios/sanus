const Stripe = require('stripe')
const stripe = Stripe('pk_test_51HwA9iItRYlC7M0MPdgUx6sp5UH48s3NRq8JOwcxxSMcHRW0i1tNzqlIiMu6NXcWj3uWVcgqNSiUzaGa2I2YgTuP00RTEVFY43')

const PaymentIntent = await stripe.paymentIntents.create({
   amount: 600,
   currency: 'mxn',
   payment_method_types: ['oxxo'],
});
