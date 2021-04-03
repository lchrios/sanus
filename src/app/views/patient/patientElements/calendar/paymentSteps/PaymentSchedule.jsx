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

const PaymentSchedule = ({ setMessage, handleNext, state, setState, hasSched, setHasSched }) => {

    const [loading, setLoading] = useState(true)
    const { user } = useAuth() 
    const [options, setOptions] = useState({
        selectionScheme: 'linear',
        startDate: new Date(),
        numDays: 5,
        hourlyChunks: 1,
        minTime: 5, // ? Preguntar a Esquivias minimo
        maxTime: 23, // ? Preguntar a Esquivias maximo
    }) 

    const handleChange = newSchedule => {
        
        var selected = state.schedule.filter(x => newSchedule.indexOf(x) === -1);
        if (selected.length == 1) {
            setState({
                ...state,
                date: selected[0].toISOString(),
            })
            handleNext()
        }
    }

    useEffect(() => {
        api.get(`/u/${user.uid}/schedule`)
        .then( res => {
            if (res.status === 204) {
                setMessage("El terapeuta aún no tiene un horario")
            } else {
                var schedDate = res.data.schedule.map(sched => new Date(sched))
                setHasSched(true)
                setState({
                    ...state,
                    schedule: schedDate,
                })
                setOptions(res.data.options)
            }
            setLoading(false);
        })
        .catch( er => {
            console.error(er);
        })
    }, [])
    
    const handleDate = date => {
        setOptions({
            ...options,
            startDate: date,
        })
    }

    return (<>
        { loading
        ?   <Loading />
        :   <>{ hasSched 
            ?   <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                    className="mt-5"
                >
                    <Grid 
                        item
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                    >            
                        <Card elevation={6} className="p-4 h-full">
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
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                        className="ml-4 mb-4"
                                            variant="inline"
                                            format="dd/MM/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Escpge la fecha"
                                            name="startDate"
                                            value={options.startDate}
                                            onChange={handleDate}
                                            KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                            </Grid>
                        
                        </Card>
                        
                    </Grid>
                    <Grid 
                        item
                        lg={8}
                        md={8}
                        sm={12}
                        xd={12}
                    >            
                        <Card className="p-4 h-full">
                            <ScheduleSelector
                                selection={state.schedule}
                                numDays={options.numDays}
                                minTime={options.minTime}
                                maxTime={options.maxTime}
                                hourlyChunks={options.hourlyChunks}
                                startDate={options.startDate}
                                selectionScheme={options.selectionScheme}
                                onChange={handleChange}
                                renderDataCell={(selected) => {
                                    console.log(selected)
                                    return <p>{selected}</p>
                                }}
                            />
                        </Card>
                    </Grid>  
                </Grid>
            :   undefined
            }</>
        }
    </>
    )

}

export default PaymentSchedule