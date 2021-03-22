import 'date-fns';
import { Card, Grid, Icon, Button, Snackbar, IconButton, SnackbarContent } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import ScheduleSelector from 'react-schedule-selector'
import DateFnsUtils from '@date-io/date-fns';
import NumericInput from 'react-numeric-input';
import SaveIcon from '@material-ui/icons/Save';
import api from 'app/services/api';
import useAuth from 'app/hooks/useAuth';
import { Loading } from 'app/components/Loading/Loading';

const SessionResume = ({ therapist, setMessage, handleNext, state, handleChange }) => {
    const { user } = useAuth() 

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
        >
            <Grid 
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
            >            
                <Card elevation={6} className="p-4 h-full w-full">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid 
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                        >
                            <TextValidator
                                className="mb-6 w-full"
                                label="Terapeuta"
                                onChange={handleChange}
                                type="text"
                                name="nombre"
                                value={therapist?.name || ''}
                                disabled={true}
                            />
                        </Grid>
                        <Grid 
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                        >
                            <TextValidator
                                className="mb-6 w-full"
                                label="Fecha"
                                type="text"
                                name="nombre"
                                value={new Date(state.date)}
                                disabled={false}
                            />
                        </Grid>
                        <Grid 
                            item
                            lg={6}
                            md={6}
                            sm={12}
                            xs={12}
                        >
                            <TextValidator
                                className="mb-6 w-full"
                                label="Tipo de Sesion"
                                type="text"
                                name="nombre"
                                value="Sesion adulto individual"
                                disabled={true}
                            />
                        </Grid>
                        <Grid 
                            item
                            lg={6}
                            md={6}
                            sm={12}
                            xs={12}
                        >
                            <TextValidator
                                className="mb-6 w-full"
                                label="Costo"
                                type="text"
                                name="nombre"
                                value="$600"
                                disabled={true}
                            />
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid> 
    )
}

export default SessionResume