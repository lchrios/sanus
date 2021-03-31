import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutDialog from './CheckoutDialog'
require('dotenv').config();

const stripePromise =  loadStripe('pk_test_51IRM5vEkM6QFZKw2tb9ybHkbnvO21XL5HheDhdKx22rnnsaAVJy9DuIsz5PS4bPEIFMUnmXRuSrjO61QKBjT1GFf00NldByUGt')

const CheckoutApp = ({therapist, tid, state}) => {

    return(
        <Elements stripe={stripePromise} >
            <CheckoutDialog therapist={therapist} tid={tid} state={state} />
        </Elements>
    )
}

export default CheckoutApp