import React, {useState} from 'react'
import {
    Button,
    Card,
    IconButton,
    Icon,
    Dialog, 
    DialogTitle,
    DialogContent,
    DialogActions
} from '@material-ui/core'
import { ArrowRight, CreditCard, Money } from '@material-ui/icons'
import CardForm from './forms/CardForm'
import OxxoForm from './forms/OxxoForm'

const getSteps = () => {
   return ['Paso 1', 'Paso 2', 'Paso 3']
}
export default function CheckoutDialog(handleCard, handleOxxo) {

    const [open, setOpen] = useState(false)
    const [activeStep, setActiveStep] =  useState(0)

    function handleCard() {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        // setActiveStep(0)
    }
    function handleOxxo() {
        setActiveStep((prevActiveStep) => prevActiveStep + 2)
        // setActiveStep(0)
    }
   
    function handleClose() {
        setOpen(false)
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
                    <CardForm   />
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
                    Felicidades
                </DialogTitle>
 
                <DialogContent className='flex-column'>
                        <h1>Gracias por tu pago</h1>
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
                    onClick={handleClose}>
                        <Icon>close</Icon>
                    </IconButton>
                    <Button
                    color="secondary"
                    variant='contained'
                    >
                        Pagar
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