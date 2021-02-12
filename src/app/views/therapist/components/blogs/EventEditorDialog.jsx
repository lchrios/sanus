import React, { useState, useEffect } from 'react'
import { Dialog, IconButton, Button, Icon, Grid } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { addNewEvent, updateEvent, deleteEvent } from '../calendar/CalendarService'
import useAuth from 'app/hooks/useAuth'
import api from 'app/services/api'


const EventEditorDialog = ({ event = {}, open, handleClose }) => {
    const [state, setState] = useState(event)
    const [therapistData, setTherapistData] = useState()
    const [therRef, setTherRef] = useState()
    const { user } = useAuth()

    const handleChange = (event) => {
        setState({ 
            ...state, 
            [event.target.name]: event.target.value 
        })
    }

    const randomCost = () => {
        return Math.floor((Math.random() * 10)) * 100 + Math.floor((Math.random() * 10)) * 10;
    } 

    useEffect(() => {
        api.get('/u/'+user.uid+'/t').then(res => {
            setTherapistData(res.data.data)
            setTherRef(res.data.data)
        })
    }, [event])

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
                ...state,
                therapist: therRef,
                thername: therapistData.name,
                patient: user.uid,
                patname: user.name,
                start: state.start,
                end: state.end,
                note: note,
                tipo: 'Terapia adulto',
                state: 'pendiente',
                pay_met: 'PayPal',
                cost: randomCost(),
                id: "",
            }).then(() => {
                handleClose()
            })
        }
    }

    const handleDeleteEvent = () => {
        if (state.id) {
            deleteEvent(state).then(() => {
                handleClose()
            })
        }
    }

    const handleDateChange = (date, name) => {
        setState({
            ...state,
            [name]: date,
        })
    }

    const generateRandomId = () => {
        let tempId = Math.random().toString()
        let id = tempId.substr(2, tempId.length - 1)
        return id
    }

    let { title, start, end, location, note } = state

    return (
        <Dialog
            onClose={handleClose}
            open={open}
            maxWidth="xs"
            fullWidth={true}
        >
            <div className="flex justify-between items-center pl-4 pr-2 py-2 bg-primary">
                <h4 className="m-0 text-white">Añadir eventos</h4>
                <IconButton onClick={handleClose}>
                    <Icon className="text-white">clear</Icon>
                </IconButton>
            </div>

            <div className="p-4">
                <ValidatorForm onSubmit={handleFormSubmit}>
                    <TextValidator
                        className="mb-6 w-full"
                        label="Nombre"
                        onChange={handleChange}
                        type="text"
                        name="title"
                        value={title || ''}
                        validators={['required']}
                        errorMessages={['Este campo es requerido']}
                    />

                    <Grid container spacing={4}>
                        <Grid item sm={6} xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DateTimePicker
                                    margin="none"
                                    id="start-date"
                                    label="Fecha"
                                    inputVariant="standard"
                                    type="text"
                                    autoOk={true}
                                    value={start || ''}
                                    fullWidth
                                    onChange={(date) =>
                                        handleDateChange(date, 'start')
                                    }
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                       
                    </Grid>
                    <div className="py-2" />
                    <TextValidator
                        className="mb-6 w-full"
                        label="Descripción"
                        onChange={handleChange}
                        type="text"
                        name="location"
                        value={location || ''}
                        validators={['required']}
                        errorMessages={['Este campo es requerido']}
                    />

                    <TextValidator
                        className="mb-9 w-full"
                        label="Note"
                        onChange={handleChange}
                        type="text"
                        name="note"
                        value={note || ''}
                        rowsMax={2}
                        multiline={true}
                        validators={['required']}
                        errorMessages={['Este campo es requerido']}
                    />

                    <div className="flex justify-between items-center">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Envíar
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

export default EventEditorDialog
