import React, { useState, useEffect } from 'react'
import { Dialog, IconButton, Button, Icon, Grid } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { addNewEvent, updateEvent, deleteEvent } from './CalendarService'
import useAuth from 'app/hooks/useAuth'
import PaymentMenu from './PaymentMenu'


Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

const EventEditorDialog = ({ event = {}, open, handleClose }) => {
    const [therapistData, setTherapistData] = useState()
    const [therRef, setTherRef] = useState()
    const [state, setState] = useState(event)
    const { user } = useAuth()
    const handleChange = (event) => {
        console.log(event.target.name)
        setState({ 
            ...state, 
            [event.target.name]: event.target.value 
        })
    }

    useEffect(() => {
        api.get('u/'+user.uid+'/t').then(res => {
            setTherapistData(res.data.data)
            setTherRef(res.data.id)
        })
    }, [event])


    const randomCost = () => {
        return Math.floor((Math.random() * 10)) * 100 + Math.floor((Math.random() * 10)) * 10;
    } 

    const handleFormSubmit = () => {
        let { id } = state

        if (id) {
            updateEvent({
                ...state,
            }).then(() => {
                handleClose()
            })
        } else {
            addNewEvent({
                therapist: therRef,
                thername: therapistData.name,
                patient: user.uid,
                patname: user.name,
                start: state.start,
                end: state.end,
                note: descripcion,
                tipo: 'Terapia adulto',
                state: 'pendiente',
                pay_met: 'PayPal',
                cost: randomCost(),
                id: "",
            }).then(() => {
                window.location.reload()
                handleClose()
            })
           
        }
    }

    const handleDeleteEvent = () => {
        if (state.id) {
            deleteEvent(state.id).then(() => {
                handleClose()
            })
        }
    }

    const handleDateChange = (date) => {
        setState({
            ...state,
            'start': date,
            'end': new Date(date).addHours(1)
        })
    }

    let { therapist, start, end, descripcion, patient } = state

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            maxWidth="xs"
            fullWidth={true}
        >
            <div className="flex justify-between items-center pl-4 pr-2 py-2 bg-primary">
                <h4 className="m-0 text-white">Agenda una sesión</h4>
                <IconButton onClick={handleClose}>
                    <Icon className="text-white">clear</Icon>
                </IconButton>
            </div>

            <div className="p-4">
                <ValidatorForm onSubmit={handleFormSubmit}>
                    <TextValidator
                        className="mb-6 w-full"
                        label="Terapeuta"
                        onChange={handleChange}
                        type="text"
                        name="nombre"
                        value={therapistData?.name || ''}
                        disabled={true}

                        //validators={['required']}
                        //errorMessages={['Este campo es requerido']}
                    />

                    <Grid container spacing={4}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DateTimePicker
                                    margin="none"
                                    id="start-date"
                                    label="Fecha y hora de inicio"
                                    inputVariant="standard"
                                    type="text"
                                    autoOk={true}
                                    value={start || ''}
                                    fullWidth
                                    onChange={(date) => 
                                        handleDateChange(date)
                                    }
                                />
                            </MuiPickersUtilsProvider>
                        </Grid> 
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DateTimePicker
                                    margin="none"
                                    id="end-date"
                                    label="Hora de final de sesion"
                                    inputVariant="standard"
                                    type="text"
                                    autoOk={true}
                                    disabled={true}
                                    value={end || ''}
                                    fullWidth
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </Grid>
                    <div className="py-2" />
                    <PaymentMenu paymentOptions={paymentOptions} />
                    
                    <TextValidator
                        className="mb-6 w-full"
                        label="Nota"
                        onChange={handleChange}
                        type="text"
                        name="descripcion"
                        //validators={['required']}
                        //errorMessages={['Este campo es requerido']}
                    />

                    

                    <div className="flex justify-between items-center">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Agendar
                        </Button>
                        <Button onClick={handleDeleteEvent}>
                            <Icon className="mr-2 align-middle">delete</Icon>
                            Borrar
                        </Button>
                    </div>
                </ValidatorForm>
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

export default EventEditorDialog
