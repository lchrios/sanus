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
    TextField,
    Snackbar
} from '@material-ui/core'
import {CreditCard, Money } from '@material-ui/icons'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import api from 'app/services/api'
import useAuth from 'app/hooks/useAuth'
import history from '../../../../../history'
import MySnackbarContentWrapper from 'app/components/Snackbar/MySnackbarContentWrapper'


/**
 * Este elemento es hijo de checkout app y se renderea en el UserProfileContent 
 */
export default function CheckoutDialog({therapist, tid, state}) {
    
    const { user } = useAuth()
    const [open, setOpen] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)
    const [submited, setSubmited] =  useState(false)
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

    function handleCloseSnack() {
        setOpenSnack(false)
    }


    function handleBack() {
        {activeStep === 1 ? setActiveStep(prevActiveStep => prevActiveStep - 1) : setActiveStep(prevActiveStep => prevActiveStep - 2)}
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
        setSubmited(true)
        let cardInfo = elements.getElement(CardElement)
        stripe.createPaymentMethod({
            type:'card',
            card: cardInfo,
        }).then((paymentMethod) => {
            console.log(paymentMethod)
            // * POST a la API
            api.post('/u/' + user.uid + '/checkout', {
                "payment_method_id": paymentMethod.paymentMethod.id,
                "amount": 60000,
                "email": user.email,

            }).then((res) => {

                let pm = paymentMethod.paymentMethod;

                stripe.confirmCardPayment(res.data.client_secret, {
                    payment_method: pm.id,
                    receipt_email: user.email,
                }).then(result => {
                    let payInfo = result.paymentIntent;
                    console.log(payInfo);
                    setOpenSnack(true)
                    api.post(`/s/new`, {sessiondata: {
                        cost: payInfo.amount,
                        duration: 60,
                        start: state.date,
                        end: new Date(new Date(state.date).getTime() + (1000*60*60)),
                        note: "",
                        user: user.uid,
                        user_name: user.name,
                        user_email: user.email,
                        pay_met: payInfo.id,
                        pay_type: 'card',
                        payed: payInfo.status === "succeeded" ? true : false,
                        therapist: tid,
                        tipo: payInfo.description,
                        ther_name: therapist.name,
                        state: 0,
                    }})
                    .then(res => history.push(`/${user.uid}/sessions`))
                    .catch( er => console.error(er))
                    
                })
            }).catch((error) => {
                console.log(error.message);
                console.log('Hubo un error al confirmar el pago con el servidor de Stripe')
            })

        }).catch((error) => {
            console.error('Hubo un error al crear el método de pago', error)
        })

    }

    const handlePayOxxo = (e) => {
        e.preventDefault();

        setSubmited(true)

        api.post('/u/' + user.uid + '/checkout', {
            amount:60000
        }).then(res => {
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
            ).then(result => {
                let payInfo = result.paymentIntent;

                api.post(`/s/new`, {
                    sessiondata: {
                        cost: payInfo.amount,
                        duration: 60,
                        start: state.date,
                        end: new Date(new Date(state.date).getTime() + (1000*60*60)),
                        note: "",
                        user: user.uid,
                        user_name: user.name,
                        user_email: user.email,
                        pay_met: payInfo.id,
                        pay_type: 'oxxo',
                        payed: false,
                        therapist: tid,
                        tipo: payInfo.description,
                        ther_name: therapist.name,
                        state: 0,
                    }
                })
            })
        }).catch(error => {
            console.error(error)
        })

    }
    
    function handleOpen() {
        setOpen(true)
    }


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
                                    disabled={submited} 
                                    required 
                                    id="oxxo-name" 
                                    value={name}
                                    onChange={handleChangeName} 
                                    label='Nombre'></TextField>

                                    <TextField 
                                    required 
                                    disabled={submited}
                                    id="oxxo-mail" 
                                    value={email} 
                                    onChange={handleChangeMail}
                                    label='Correo electrónico'></TextField>
                                </div>
                            </Card>
                        </Grid>
                    </form>
            )
            default: console.log('Ninguno de los métodos de pago está disponibles')
        }
    }
    
    return(
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={openSnack}
                autoHideDuration={6000}
                onClose={handleCloseSnack}
            >
                <MySnackbarContentWrapper
                    onClose={handleCloseSnack}
                    variant="success"
                    message="¡Tu pago se ha realizado correctamente! Ya puedes revisar tu sesion en 'Mis sesiones'"
                />
            </Snackbar>
           {/**DIALOGO DE SELECCIÓN DE METODO DE PAGO */}
            <Dialog
                aria-labelledby="customized-dialog-title"
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Selecciona un método de pago
                </DialogTitle>
                {/**
                 * Si selecciona una opción desaparece con este validador
                 */}
                {activeStep === 0 ? (
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
                <DialogContent>
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
                    className={activeStep === 0 ? 'hidden' : ''}
                    onClick={activeStep === 1 ? handlePayCard : handlePayOxxo}
                    >
                        {activeStep  === 1 ? 'Pagar con tarjeta' : 'Pagar con oxxo'}

                    </Button>
                </DialogActions>
            </Dialog>


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