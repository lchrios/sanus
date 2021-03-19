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
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import WarningIcon from '@material-ui/icons/Warning'
import { makeStyles } from '@material-ui/core/styles'
import { amber, green } from '@material-ui/core/colors'
import history from '../../../history'

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
}

const useStyles1 = makeStyles((theme) => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}))

const MySnackbarContentWrapper = (props) => {
    const classes = useStyles1()
    const { className, message, onClose, variant, ...other } = props
    const Icon = variantIcon[variant]

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={onClose}
                >
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    )
}

MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info'])
        .isRequired,
}


const TherapistSchedule = () => {
    const selectionSchemes = ['linear', 'square']
    const [state, setState] = useState({ schedule: [] })
    const [loading, setLoading] = useState(true)
    const [openSuccess, setOpenS] = useState(false)
    const [openFailed, setOpenF] = useState(false)
    const { user } = useAuth() 
    const [options, setOptions] = useState({
        selectionScheme: 'linear',
        startDate: new Date(),
        numDays: 5,
        hourlyChunks: 1,
        minTime: 5, // ? Preguntar a Esquivias minimo
        maxTime: 23, // ? Preguntar a Esquivias maximo
    })
    
    const saveSchedule = () => {

        // *  convertirlo a  ISOString
        state.schedule = state.schedule.map(date => typeof date === "object" ? date.toISOString() : date)
        
        api.post(`/t/${user.uid}/schedule`, { 
            schedule: state.schedule, 
            options: {
                ...options,
                startDate: options.startDate.toISOString(),
            } 
        })
        .then( res => {
            handleSuccess() 
        })
        .catch( er => {
            console.error(er)
            handleFailed()
        })
    }

    const handleChange = newSchedule => {
        setState({ schedule: newSchedule })
    }

    const handleDays = numDays => {
        setOptions({
            ...options,
            numDays: numDays,
        })
    }

    const handleMaxTime = maxTime => {
        setOptions({
            ...options,
            maxTime: maxTime,
        })
    }

    const handleMinTime = minTime => {
        setOptions({
            ...options,
            minTime: minTime,
        })
    }
 
    const handleOptions = event => {
        setOptions({
            ...options,
            [event.target.name]: event.target.value,
        })    
    } 


    useEffect(() => {
        api.get(`/t/${user.uid}/schedule`)
        .then( res => {
            setState({
                ...state,
                schedule: res.data.schedule,
            })
            setOptions({
                ...res.data.options,
                startDate: new Date(res.data.options.startDate),
            })
        })
        .catch( er => {
            console.error(er);
            handleFailed()
        })
    }, [])
    
    const handleDate = date => {
        setOptions({
            ...options,
            startDate: date,
        })
    }

    function handleSuccess() {
        setOpenS(true)
    }
    
    function handleFailed() {
        setOpenS(true)
    }

    function handleCloseS(event, reason) {
        if (reason === 'clickaway') {
            return
        }

        setOpenS(false)
    }

    function handleCloseF(event, reason) {
        if (reason === 'clickaway') {
            return
        }

        setOpenF(false)
    }
    

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
        >
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={openSuccess}
                autoHideDuration={6000}
                onClose={handleCloseS}
            >
                <MySnackbarContentWrapper
                    onClose={handleCloseS}
                    variant="success"
                    message="This is a success message!"
                />
            </Snackbar>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={openFailed}
                autoHideDuration={6000}
                onClose={handleCloseF}
            >
                <MySnackbarContentWrapper
                    onClose={handleCloseF}
                    variant="error"
                    message="¡Hubo un error actualizando/obteniendo tu schedule!"
                />
            </Snackbar>
            <Grid 
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
            >
                <Button
                    variant="contained"
                    color="secondary"
                    className="mt-5"
                    style={{
                        position:'relative',
                        top:'50%',
                        left:'48%',
                    }}
                    onClick={() => history.push(`/${user.uid}/dashboard`)}
                >
                    Volver al escritorio
                </Button>
            </Grid>
            <Grid 
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
            >            
                <Card elevation={6} className="p-4 h-full">
                    <ValidatorForm onSubmit={handleChange}>
                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="stretch"
                        >
                            <Grid 
                                item
                                lg={1}
                                md={1}
                                sm={6}
                                xs={12}
                            > 
                                <TextValidator
                                    className="w-full mt-4"
                                    label="Tipo de seleccion"
                                    onChange={handleOptions}
                                    variant="outlined"
                                    name="selectionScheme"
                                    select
                                    value={options?.selectionScheme || ""}
                                    validators={['required']}
                                    errorMessages={['este campo es obligatorio']}
                                    SelectProps= {
                                        {native:true}
                                    }
                                >
                                    {selectionSchemes.map((scheme) => (
                                        <option key={scheme} value={scheme}>
                                            {scheme}
                                        </option>
                                    ))}
                                </TextValidator>
                            </Grid>
                            <Grid 
                                item
                                lg={2}
                                md={2}
                                sm={6}
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
                            <Grid 
                                item
                                lg={true}
                                md={true}
                                sm={6}
                                xs={12}
                            >
                                <Grid 
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="stretch"
                                    spacing={3}
                                >
                                    <Grid 
                                        item
                                        lg={4}
                                        md={4}
                                        sm={12}
                                        xs={12}
                                    > 
                                            <p className="h5 text-primary">Días</p>
                                            <NumericInput
                                                label="Dias"
                                                onChange={handleDays}
                                                name="numDays"
                                                min={0}
                                                max={9}
                                                value={options.numDays || 5}
                                            />
                                    </Grid>
                                    <Grid 
                                        item
                                        lg={4}
                                        md={4}
                                        sm={12}
                                        xd={12}
                                    > 
                                        <p className="h5 text-primary">Min</p>
                                        <NumericInput
                                            label="Dias"
                                            onChange={handleMinTime}
                                            name="minTime"
                                            min={0}
                                            max={23}
                                            value={options.minTime}
                                        />
                                    </Grid>
                                    <Grid 
                                        item
                                        lg={1}
                                        md={1}
                                        sm={12}
                                        xd={12}
                                    > 
                                        <p className="h5 text-primary">Max</p>
                                        <NumericInput
                                            title="Dias"
                                            onChange={handleMaxTime}
                                            name="maxTime"
                                            min={0}
                                            max={23}
                                            value={options.maxTime}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid 
                                item
                                lg={12}
                                md={12}
                                sm={12}
                                xd={12}
                            >
                                <Button
                                    className="mt-4"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    style={{
                                        position:'relative',
                                        left:'50%',
                                    }}
                                    onClick={saveSchedule}
                                    startIcon={<SaveIcon />}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                        
                    </ValidatorForm>
                    
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
                    />
                </Card>
            </Grid>  
        </Grid>
    )
}

export default TherapistSchedule;