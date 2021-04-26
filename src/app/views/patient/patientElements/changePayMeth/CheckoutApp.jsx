import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutDialog from './CheckoutDialog'
require('dotenv').config();

const stripePromise =  loadStripe(
['pk_test_51IRM5vEkM6QFZKw2tb9ybHkbnvO21XL5HheDhdKx22rnnsaAVJy9DuIsz5PS4bPEIFMUnmXRuSrjO61QKBjT1GFf00NldByUGt',
'pk_live_51IRM5vEkM6QFZKw24ZLwghtVq5b3U7RWH8gNhhgFGuj4vxI594QTTQLkteEXD93FTUioLPR9f1QvtV0bNc3J0KUo00Otrzhv8k'],
[1])

const CheckoutApp = ({therapist, tid, state}) => {

    return(
        <Elements stripe={stripePromise} >
            <CheckoutDialog therapist={therapist} tid={tid} state={state} />
        </Elements>
    )
}

export default CheckoutApp