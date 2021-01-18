import React, { useState } from 'react'
import { Dialog, IconButton, Button, Icon, Grid } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { addNewEvent, updateEvent, deleteEvent } from './CalendarService'


Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

const EventEditorDialog = ({ event = {}, open, handleClose }) => {
    const [state, setState] = useState(event)
    const handleChange = (event) => {
        console.log(event.target.name)
        setState({ 
            ...state, 
            [event.target.name]: event.target.value 
        })
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
                id: generateRandomId(),
                ...state,
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

    const handleDateChange = (date) => {
        setState({
            ...state,
            'start': date,
            'end': new Date(date).addHours(1)
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
                        name="Nombre"
                        validators={['required']}
                        errorMessages={['Este campo es requerido']}
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
                    <TextValidator
                        className="mb-6 w-full"
                        label="Descripción"
                        onChange={handleChange}
                        type="text"
                        name="descripción"
                        validators={['required']}
                        errorMessages={['Este campo es requerido']}
                    />

                    <TextValidator
                        className="mb-9 w-full"
                        label="Nota extra"
                        onChange={handleChange}
                        type="text"
                        name="nota"
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

export default EventEditorDialog
