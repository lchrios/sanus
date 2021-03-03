import React, {useState} from 'react'
import {
    Button,
    Card,
    IconButton,
    Icon,
    Dialog, 
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid
} from '@material-ui/core'
import { ArrowRight, CreditCard, Money } from '@material-ui/icons'
import OxxoForm from './forms/OxxoForm'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import api from 'app/services/api'
import useAuth from 'app/hooks/useAuth'

const getSteps = () => {
    return ['Paso 1', 'Paso 2', 'Paso 3']
}
export default function CheckoutDialog() {
    
    const { user } = useAuth()
    const [open, setOpen] = useState(false)
    const [activeStep, setActiveStep] =  useState(0)

    const stripe = useStripe()
    const  elements = useElements();
    function handleCard() {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        // stripe.redirectToCheckout({
        //     sessionId: session.id
        // })
        
    }
    function handleOxxo() {
        setActiveStep((prevActiveStep) => prevActiveStep + 2)
        // setActiveStep(0)
    }
    
    function handleClose() {
        setOpen(false)
    }

    function handleBack() {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    /** COn handlePay, le pido a stripe que cree un metodo de pago que va a recibir, y le digo que lo va a recibir de CardElement con getElement */
    const handlePay = async (e) => {
        e.preventDefault();
        // setOpen(false)

        stripe.createPaymentMethod({
            type:'card',
            card: elements.getElement(CardElement)
        }).then((paymentMethod) => {
            // * POST a la API
            api.post('/u/' + user.uid + '/checkout', {
                ...paymentMethod.paymentMethod,
                amount:60000,
            }).then((res) => {
                console.log(res.data);
            }).catch((e) => {
                console.log('Hubo un error al enviar el método de pago al servidor')
                console.error(e);
            })

        }).catch((error) => {
            console.log('Hubo un error al crear el método de pago')
        })

        // const {error, paymentMethod} = await stripe.createPaymentMethod({
        //     type:'card',
        //     card: elements.getElement(CardElement)
        // })

        // if (!error) {
        //     const {id} = paymentMethod;
            
        //     // // const response = await api.post('/u/' + user.uid + '/checkout', {
        //     // //     ...paymentMethod,
        //     // //     amount:60000,
        //     // // })
        //     // // console.log(response.data)

        //     api.post('/u/' + user.uid + '/checkout', {
        //         ...paymentMethod,
        //         amount:60000,
        //     }).then((res) => {
        //         console.log(res.data);
        //     }).catch((e) => {
        //         console.error(e);
        //     })

        //     console.log(response)
        // }
    }

    function handleOpen() {
        setOpen(true)
    }

    const steps = getSteps()

    const getStepContent = (stepIndex) => {
        switch(stepIndex) {
            case 0: 
                return(
                    null
                )
            case 1: 
                return (
                    <form onSubmit={handlePay}>
                        <Grid item>
                            <Card className="text-center mb-4">
                                <div className='mb-4'>
                                    <h4>Costo por sesión: 600.00 MXN</h4>
                                </div>
                            <CardElement className="form-control"
                            option={{
                                style: {
                                    base: {
                                        fontSize:'16px',
                                        color:'#424770',
                                        '::placeholder' : {
                                            color: '#aab7c4'
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2156'
                                    }
                                }
                            }}
                            />
                            </Card>
                        </Grid>

                        {/* <Button
                        startIcon={<Money/>}
                        variant='outlined'
                        color='primary'
                        onClick={handlePay}
                        >
                            Pagar
                        </Button> */}
                    </form>
            )
            case 2: 
                return(
                    <OxxoForm />
            )
        }
    }
    return(
        <div>
           {/**DIALOGO DE SELECCIÓN DE METODO DE PAGO */}
           {/**
            * ? No entiendo la lógica del steps.length xd
            */}
           {activeStep === steps.length ? (
            <Dialog
            aria-labelledby="customized-dialog-title"
            open={open}
            onClose={handleClose}>
                <DialogTitle>
                    Test
                </DialogTitle>
 
                <DialogContent className='flex-column'>
                        <h1>Sí</h1>
                </DialogContent>
                <DialogActions>
                    <IconButton
                    onClick={handleClose}
                    >
                        <Icon>close</Icon>
                    </IconButton>
                </DialogActions>
            </Dialog>    
           ) : (
            <Dialog
            aria-labelledby="customized-dialog-title"
            open={open}
            onClose={handleClose}>
                <DialogTitle>
                    Selecciona un método de pago
                </DialogTitle>
                {/**
                 * Si selecciona una opción desaparece con este validador
                 */}
                {activeStep == 0 ? (
                    <DialogContent>
                    <div className='flex-column'>
                        <Button
                            color='primary'
                            variant='outlined'
                            startIcon={<CreditCard/>}
                            className="mb-4"
                            onClick={handleCard}>
                                Tarjeta de crédito o débito
                            </Button>
                            <Button
                            color='secondary'
                            variant='outlined'
                            startIcon={<Money/>}
                            onClick={handleOxxo}
                            >
                                Deposita en OXXO
                        </Button>
                    </div>
                </DialogContent>
                ) : null}
                <DialogContent className=''>
                    {getStepContent(activeStep)}
                </DialogContent>

                <DialogActions>
                    <IconButton
                    onClick={activeStep == steps.length > 1 ? handleBack : handleClose}>
                        {activeStep == steps.length > 1 ? <Icon>arrow_back_ios</Icon> : <Icon>close</Icon> }
                    </IconButton>
                    <Button
                    color="secondary"
                    variant='contained'
                    onClick={activeStep == steps.length > 1 ? handlePay : handleClose}
                    >
                        {activeStep == steps.length > 1 ? 'Pagar' : 'Cerrar'}
                    </Button>
                </DialogActions>
            </Dialog>

           )}

           {/**TERMINA EL DIALOGO */}

           <Card className="elevation-z5 text-center p-4">
                <div>
                    <h2 className="font-medium mb-6">
                        Paga tu próxima sesión
                    </h2>
                </div>
                <Button
                onClick={handleOpen}
                color="primary"
                variant="contained">
                        Selecciona un método de pago
                </Button>
            </Card>
        </div>
    )
}