import React, {useState} from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import CheckoutDialog from './CheckoutDialog'


const stripePromise =  loadStripe('pk_test_51HwA9iItRYlC7M0MPdgUx6sp5UH48s3NRq8JOwcxxSMcHRW0i1tNzqlIiMu6NXcWj3uWVcgqNSiUzaGa2I2YgTuP00RTEVFY43')

export default function CheckoutApp() {

    // const [activeStep, setActiveStep] = useState(0)
    // function handleCard() {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1)
    // }
    // function handleOxxo() {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 2)
    // }

    /**
     * !!! ELIMINÉ LAS PROPIEDADES DE CHECKOUT DIALOG QUE IBAN A RECIBIR LOS PARAMETROS DEL ACTIVE STEP PARA CONTINUAR BUSCANDO SOLUCIONES
     */

    return(
        <Elements stripe={stripePromise}>
            <CheckoutDialog />
        </Elements>
    )
}