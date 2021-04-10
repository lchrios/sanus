import React, { useState, useEffect } from 'react'
import { Dialog, IconButton, Button, Icon, Grid, Card, Stepper, Step, StepLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { addNewEvent, updateEvent, deleteEvent } from './CalendarService'
import useAuth from 'app/hooks/useAuth'
import PaymentMenu from './PaymentMenu'
import api from 'app/services/api'
import { Loading } from 'app/components/Loading/Loading'
import PaymentSchedule from './paymentSteps/PaymentSchedule'
import SessionResume from './paymentSteps/SessionResume'
import CheckoutApp from '../changePayMeth/CheckoutApp'


Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 650,
        borderRadius: 12,
        margin: '1rem',
        width: true,
    },
    cardLoading: {
        minWidth:200,
        borderRadius: 12,
        margin: '1rem',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    socialButton: {
        width: '100%',
        '& img': {
            margin: '0 8px',
        },
    },
    labelLink: {
        color: palette.primary.main,
        textDecoration: 'underline',
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

const getSteps = () => ['Selecciona una fecha', 'Resumen', 'Paga tu cita']   

const ScheduleSession = ({ open, handleClose, therapist, tid }) => {
    const [state, setState] = useState();
    const classes = useStyles();
    const steps = getSteps();
    const [hasSched, setHasSched] = useState(false)
    const [activeStep, setActiveStep] = useState(0);
    const [message, setMessage] = useState("");
    
    useEffect(() => {
        console.log(state)
    },[state])

    const handleChange = (event) => {
        console.log(event.target.name)
        
        setState({ 
            ...state, 
            [event.target.name]: event.target.value 
        })


    }

    const handleFormSubmit = () => {
        let { id } = state

        // TODO: Hacer el pago
        // TODO: subir la session si el pago con tarjeta fue exitoso
        // TODO: mostrar el voucher

        // if (id) {
        //     updateEvent({
        //         ...state,
        //     }).then(() => {
        //         handleClose()
        //     })
        // } else {
        //     addNewEvent({
        //         therapist: therRef,
        //         thername: therapistData.name,
        //         patient: user.uid,
        //         patname: user.name,
        //         start: state.start,
        //         end: state.end,
        //         note: descripcion,
        //         tipo: 'Terapia adulto',
        //         state: 0,
        //         pay_met: 'PayPal',
        //         cost: 60000,
        //         id: "",
        //     })
        //     .then(() => {
        //         window.location.reload()
        //         handleClose()
        //     }) 
        //}
    }
    

    const getSetpContent = (stepContent) => {
        switch (stepContent) {
            case 0: // * Schedule selector
                return <PaymentSchedule setMessage={setMessage} handleNext={handleNext} state={state} setState={setState} hasSched={hasSched} setHasSched={setHasSched}/>

            case 1: // * Information resume
                return <SessionResume therapist={therapist} setMessage={setMessage} handleNext={handleNext} state={state} handleChange={handleChange}/>

            case 2: // * Stripe payment options
                return <CheckoutApp state={state} therapist={therapist} tid={tid}/>

            case 4: // * Session confirmation
                break;

            default:
                break;
        }
    }

    const handleNext = () => {
        if (activeStep === 0) {
            if (state.date === "" || state.date === undefined) {
                setMessage("Selecciona una fecha para continuar.");
            } else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1)
            }
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
    }
    
    useEffect(() => {
        setMessage("")
    }, [activeStep])

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        
    }

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            maxWidth="md"
            fullWidth={true}
        >
            <div className="flex justify-between items-center pl-4 pr-2 py-2 bg-primary">
                <h4 className="m-0 text-white">Agenda una sesión</h4>
                <IconButton onClick={handleClose}>
                    <Icon className="text-white">clear</Icon>
                </IconButton>
            </div>

            <div className="p-4">
                <Card className={classes.card}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper> 
                    <Grid 
                        container 
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        spacing={2} >
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Grid 
                                container 
                                direction="column"
                                justify="center"
                                alignItems="center"
                                spacing={2}  
                                className="p-8 h-full"
                            >
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    {activeStep === steps.length 
                                    ?   <div className="flex items-center">
                                            <div className="flex items-center mb-4"> 
                                                {/* // TODO: Mostrar informacion de pago exitoso */} 
                                                <Icon>done</Icon> <span className="ml-2">Tus Sesión fue pagada con éxito :D</span>
                                            </div>
                                        </div>
                                    :   <div className=" flex-column items-center">
                                            <ValidatorForm onSubmit={handleFormSubmit}>
                                            {message && ( // TODO:@esq Darle más formato a ese mensaje, muestra los errores que pueden ir ocurriendo
                                                <p className="text-error h4 mt-5">{message}</p>
                                            )} 
                                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <Grid 
                                                        container 
                                                        direction="row"
                                                        justify="center"
                                                        alignItems="center"
                                                        spacing={2}   
                                                        className="flex mt-3"
                                                    >
                                                        { activeStep === 2 ? <></> : <>
                                                            <Button className="capitalize"
                                                                variant={activeStep === 0 ? 'text' : 'contained'}
                                                                color={activeStep === 0 ? 'primary' : 'secondary'}
                                                                disabled={activeStep === 0}
                                                                onClick={handleBack}
                                                            >
                                                                Volver
                                                        </Button>
                                                        <span className="mx-2 ml-5 mr-5">ó</span>
                                                        { activeStep === 1 ? 
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={handleNext}
                                                        >
                                                            Pagar <Icon className="ml-5">shopping_cart</Icon>
                                                        </Button>
                                                        :
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            type="submit"
                                                            onClick={handleNext}
                                                            disabled={!hasSched}
                                                        >
                                                            Siguiente
                                                        </Button>
                                                        }</>}
                                                    </Grid>
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    {getSetpContent(activeStep)}
                                                </Grid>
                                            
                                            </ValidatorForm>
                                        </div>
                                    }
                                </Grid>
                                         
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        </Dialog>
    )
}

const paymentOptions = [
    {
        label: 'PayPal',
        src: 'assets/images/payment-methods/paypal.png'
    },
    {
        label: 'Visa',
        src: 'assets/images/payment-methods/visa.png'
    },
    {
        label: 'MasterCard',
        src: 'assets/images/payment-methods/master-card.png'
    },
    {
        label: 'Depósito en oxxo',
        src: 'assets/images/payment-methods/oxxo.png'
    },
]

export default ScheduleSession
