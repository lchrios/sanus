import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Grid,
    Button,
    CircularProgress,
    Stepper,
    Step,
    StepLabel,
    Input, 
    InputLabel, 
    InputAdornment, 
    FormControl,
    Icon,
    TextField,
    Divider,
    Box,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Home, Mail, Phone, DataUsage } from '@material-ui/icons'
import clsx from 'clsx'
import api from 'app/services/api'
import history from '../../../../history'
import firebase from 'firebase/app'
import useAuth from 'app/hooks/useAuth'
import { useLocation } from 'react-router'
const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 650,
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

const TherapistDataForm = () => {
    const [loading, setLoading] = useState(false)
    const classes = useStyles()
    const { user } = useAuth()
    const [activeStep, setActiveStep] = useState(0)
    const [message, setMessage] = useState("")
    const [state, setState] = useState({...useLocation().state, grade:false})
    
    let {email,password} = state
    const { createTherapistWithEmailAndPassword, signInWithEmailAndPassword } = useAuth();
    
    const getSteps = () => {
        return ['Contacto', 'Profesional', 'Perfil']
    }
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value 
        })
    }

    const handleAgree = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    };

    const handleFileUpload = (event) => {
        console.log(event)
    }

    const getStepContent = (stepIndex) => {
        switch(stepIndex) {
            //BASIC DATA
            case 0:
                return  <Box className="m-sm-30">
                        <div className="max-w-600 mx-auto">
                            <h4>Bienvenido a Iknelia, tu consultorio online</h4>
                            <p>
                                Por favor llena este formulario para aplicar a nuestra plataforma
                            </p>
                            <Divider className="mb-8" />
            
                            <TextValidator
                                className="mb-4"
                                label="Nombre"
                                size="small"
                                name="name"
                                fullWidth
                                onChange={handleChange}
                                value={state.name || ""}
                                validators={['required']}
                                errorMessages={['Ingresa tu nombre porfavor']}
                            />
                            <TextValidator
                                className="mb-4"
                                label="Apellidos"
                                size="small"
                                name="lastname"
                                fullWidth
                                onChange={handleChange}
                                value={state.lastname || ""}
                                validators={['required']}
                                errorMessages={['Ingresa tu apellido por favor']}
                            />
                            <TextValidator
                                className="mb-4"
                                label="Correo electrónico"
                                value={state.email || ''}
                                fullWidth
                                name="email"
                                disabled={state.email ? true : false}
                                onChange={handleChange}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Mail/>
                                    </InputAdornment>
                                )}}
                                validators={['required']}
                                errorMessages={['Ingresa tu email por favor']}
                            />
                            <Divider className="mb-6" />
                            <TextValidator
                                className="mb-4"
                                label="Dirección"
                                name="address"
                                type="text"
                                fullWidth
                                value={state.address || ""}
                                placeholder="Dirección"
                                onChange={handleChange}
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Home/>
                                    </InputAdornment>
                                )}}
                                validators={['required']}
                                errorMessages={['Ingresa tu dirección por favor']}
                            />
                            <Divider className="mb-8" />
                            <TextValidator
                                className="mb-4"
                                label="Teléfono"
                                name="phone"
                                value={state.phone || ""}
                                fullWidth
                                onChange={handleChange}
                                placeholder="(LADA)XXXXXXXXXX"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Phone/>
                                    </InputAdornment>
                                )}}
                                validators={['required']}
                                errorMessages={['Ingresa tu teléfono por favor']}
                            />
                            <div>
                                <h3>¿Tienes un título que sea validado por una institución oficial?</h3>
                                <FormControlLabel
                                    name="grade"
                                    onChange={(e) => handleAgree ({
                                        target: {
                                            name: "grade",
                                            value: e.target.checked
                                        }
                                    })}
                                    control = {
                                        <Checkbox 
                                            name="grade"
                                            checked={state.grade || false }
                                            />
                                        }
                                        label="Confirmo que soy profesional"
                                />
                                {message && (
                                    <p className="text-error">{message}</p>
                                )}
                            </div>
                        </div>
                    </Box> 
                    
            case 1: 
                return <Box className="m-sm-30 p-6">
                        <div className="max-w-600 mx-auto">
                            <h4>Ahora, compártenos tus datos profesionales.</h4>
                            <TextField
                                className="mb-4"
                                label="Cédula profesinal"
                                name="cedula"
                                type="number"
                                value={state.cedula || ""}
                                fullWidth
                                onChange={handleChange}
                                placeholder="XXXXXXXXXX"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <DataUsage/>
                                    </InputAdornment>
                                )}}
                                validators={['required']}
                                errormessages={['Debes ingresar tu cédula profesional']}
                            />
                        </div>
                    </Box>
            case 2: 
                return <Box className="m-sm-30 p-3">
                    <div className="max-w-600 mx-auto">
                        <h4>Selecciona una fotografía para tu perfil</h4>
                        <Divider className="mb-8" />

                        <input
                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                            className={classes.input}
                            onChange={handleFileUpload}
                        />
                        
                            <label  htmlFor="contained-button-file">
                                <Button className="x-center" variant="contained" color="primary" component="span">
                                        Subir 
                                </Button>
                            </label>
                    </div>
                    <div className="max-w-600 mx-auto mt-4">
                        <h4>Sube tu CV cómo documento PDF</h4>
                        <Divider className="mb-8" />
                        <input
                            id="contained-button-file"
                            multiple
                            type="file"
                            className={classes.input}
                            onChange={handleFileUpload}
                        />
                        
                        <label  htmlFor="contained-button-file">
                            <Button className="x-center" variant="contained" color="primary" component="span">
                                    Subir 
                            </Button>
                        </label>
                    </div>
                </Box> 
            default: 
        }
    }

    const handleNext = () => {
        if (activeStep == 0) {
            if (state.grade == false || state.grade == undefined) {
                setMessage('Debes confirmar que cuentas con un título profesional')
            } else if(state.name == "" || state.name == undefined) {
                setMessage('Ingresa tu nombre por favor')
            } else if(state.lastname == "" || state.lastname == undefined) {
                setMessage('Ingresa tu apellido por favor')
            } else if(state.address == "" || state.address == undefined) {
                setMessage('Ingresa tu dirección por favor')
            } else if(state.phone == "" || state.phone == undefined) {
                setMessage('Ingresa tu número telefónico por favor')
            }else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1)}
        }else if (activeStep == 1) {
            if (state.cedula == "" || state.cedula == undefined) {
                setMessage('Debes ingresar tu cédula profesional')
            } else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1)
            }
        }else if (activeStep == 2) {
        }

    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    const handleFormSubmit = () => {
        let {email, password } = state
        
        createTherapistWithEmailAndPassword(state)
        .then( res => {
            // * Aqui haces lo de que te mande a otro lado
            signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push(`/${firebase.auth().currentUser.uid}/home`)
            })
            .catch( error => {
                console.error("Error al obtener el decodedToken del user", error)
            })
        })
        .catch( e => {
            setLoading(false)
            console.log(e)
            setMessage("No es posible iniciar sesión, Quizá tu contraseña sea incorrecta o es probable que no estés registrado. Intenta registrarte.")
            
        })
    }

    return(
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {getSteps().map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div className="p-8 h-full">
                            <div>
                                {activeStep === getSteps().length ? (
                                    <div className="flex items-center">
                                        <div className="flex items-center mb-4">
                                            <Icon>done</Icon> <span className="ml-2">Tus respuestas han sido enviadas :D</span>
                                        </div>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={handleReset}
                                        >
                                            Reset
                                        </Button>
                                    </div>
                                ) : (
                                    <div className=" flex-column items-center">
                                        <ValidatorForm onSubmit={handleFormSubmit}>
                                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                                {getStepContent(activeStep)}
                                            </Grid>
                                            <div className="flex mt-3">
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        type="submit"
                                                        onClick={activeStep == getSteps().length -1 ? handleFormSubmit : handleNext}
                                                    >
                                                        {activeStep == getSteps().length - 1
                                                        ? 'Enviar respuestas' : 'Siguiente'}
                                                    </Button>
                                                    {loading && (
                                                        <CircularProgress
                                                            size={24}
                                                            className={
                                                                classes.buttonProgress
                                                            }
                                                        />
                                                    )}
                                                    <span className="mx-2 ml-5">ó</span>
                                                        <Button className="capitalize"
                                                            variant={activeStep === 0 ? 'text' : 'contained'}
                                                            color={activeStep === 0 ? 'primary' : 'secondary'}
                                                            disabled={activeStep === 0}
                                                            onClick={handleBack}
                                                        >
                                                            Volver
                                                        </Button>
                                            </div>
                                        </ValidatorForm>
                                    </div>
                                )}
                            </div>
                            {message && ( // TODO:@esq Darle más formato a ese mensaje, muestra los errores que pueden ir ocurriendo
                                <p className="text-error">{message}</p>
                            )}          
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default TherapistDataForm