import React, {useState} from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutDialog from './CheckoutDialog'
require('dotenv').config();

const stripePromise =  loadStripe('pk_test_51HwA9iItRYlC7M0MPdgUx6sp5UH48s3NRq8JOwcxxSMcHRW0i1tNzqlIiMu6NXcWj3uWVcgqNSiUzaGa2I2YgTuP00RTEVFY43')

export default function CheckoutApp() {

    return(
        <Elements stripe={stripePromise}>
            <CheckoutDialog />
        </Elements>
    )
}