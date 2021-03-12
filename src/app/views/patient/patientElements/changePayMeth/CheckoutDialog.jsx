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
    Grid,
    TextField
} from '@material-ui/core'
import {CreditCard, Money } from '@material-ui/icons'
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
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const stripe = useStripe()
    const  elements = useElements();
    function handleCard() {
        setActiveStep(1)
        
    }
    function handleOxxo() {
        setActiveStep(2)
    }
    
    function handleClose() {
        setOpen(false)
    }

    function handleBack() {
        {activeStep == 1 ? setActiveStep((prevActiveStep) => prevActiveStep - 1) : setActiveStep((prevActiveStep) => prevActiveStep - 2)}
    }

    function handleChangeName(event) {
        setName(event.target.value)
    }

    function handleChangeMail(event) {
        setEmail(event.target.value)
    }

    /** COn handlePay, le pido a stripe que cree un metodo de pago que va a recibir, y le digo que lo va a recibir de CardElement con getElement */
    const handlePayCard = async (e) => {
        e.preventDefault();


        stripe.createPaymentMethod({
            type:'card',
            card: elements.getElement(CardElement)
        }).then((paymentMethod) => {
            console.log(paymentMethod)
            // * POST a la API
            api.post('/u/' + user.uid + '/checkout', {
                ...paymentMethod.paymentMethod,
                amount:60000,
            }).then((res) => {
                console.log(res);
            }).catch((e) => {
                console.log('Hubo un error al enviar el método de pago al servidor')
                console.error(e);
            })

        }).catch((error) => {
            console.log('Hubo un error al crear el método de pago')
        })

    }
    const handlePayOxxo = (e) => {
        e.preventDefault();


        api.post('/u/' + user.uid + '/checkout', {
            amount:60000
        }).then(res => {
            console.log(res)
            stripe.confirmOxxoPayment(
                res.data.client_secret, 
                {
                    payment_method: {
                        billing_details: {
                            name: name,
                            email: email
                        }
                    }
                }
            )
        })

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
                    <form onSubmit={handlePayCard}>
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
                    </form>
            )
            case 2: 
                return(
                    <form onSubmit={handlePayOxxo}>
                        <Grid item>
                            <Card className="text-center mb-4">
                                <div className='mb-4'>
                                    <h4>Costo por sesión: 600.00 MXN</h4>
                                </div>
                                <div className="flex-column">
                                    <TextField 
                                    required 
                                    id="oxxo-name" 
                                    value={name}
                                    onChange={handleChangeName} 
                                    label='Nombre'></TextField>

                                    <TextField 
                                    required 
                                    id="oxxo-mail" 
                                    value={email} 
                                    onChange={handleChangeMail}
                                    label='Correo electrónico'></TextField>
                                </div>
                            </Card>
                        </Grid>
                    </form>
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
                    onClick={activeStep >= 1 ? handleBack : handleClose}>
                        {activeStep >= 1 ? <Icon>arrow_back_ios</Icon> : <Icon>close</Icon> }
                    </IconButton>
                    <Button
                    color="secondary"
                    variant='contained'
                    className={activeStep == 0 ? 'hidden' : ''}
                    onClick={activeStep == 1 ? handlePayCard : handlePayOxxo}
                    >
                        {activeStep  == 1 ? 'Pagar con tarjeta' : 'Pagar con oxxo'}

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