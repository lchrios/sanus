import React, { useState, useEffect } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    Grid,
    Button,
    CircularProgress,
    Stepper,
    Step,
    StepLabel,
    InputAdornment,
    Icon,
    Divider,
    Box,
    Checkbox,
    FormControlLabel,
    RadioGroup,
    Radio
} from '@material-ui/core'

import firebase from 'firebase/app'
import { Home, Phone, Mail } from '@material-ui/icons'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import history from '../../../../history'
import { useLocation } from 'react-router'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Loading } from 'app/components/Loading/Loading'

const getSteps = () =>{
    return ['Bienvenido', 'Contacto', 'Perfil']   
} 

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 650,
        borderRadius: 12,
        margin: '1rem',
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

const UserDataForm = () => {
    const [state, setState] = useState(useLocation().state);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const steps = getSteps();
    const [activeStep, setActiveStep] = useState(0);
    const [message, setMessage] = useState("");
    const [imgRender, setImgRender] = useState();;
    const { createUserWithEmailAndPassword, signInWithEmailAndPassword } = useAuth();


    const handlePhone = phoneVal => {
        setState({
            ...state,
            phone: phoneVal,
        })
    }

    const handleFormSubmit = () => {
        let { email, password } = state;
        setLoading(true)

        createUserWithEmailAndPassword(state)
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


    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleAge = ({ target: {name, value } }) => {
        setState({
            ...state,
            [name]: parseInt(value),
        }) 
    }

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setState({...state, file: event.target.files[0]});
            let reader = new FileReader();
            reader.onload = (e) => {
                setImgRender(e.target.result)
                    
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const getSetpContent = (activeStep) => {
        switch (activeStep) {
            case 0:
                return (
                <div className="max-w-600 mx-auto">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h4>Bienvenido a Iknelia, tu plataforma de soporte psicológico en línea</h4>
                            <p>
                                Por favor responde con honestidad
                            </p>
                        </Grid>
                        <Divider className="mb-8" />
                        <Grid item lg={8} md={8} sm={8} xs={12}>
                            <p className="h4 text-brand">Datos de contacto:</p>
                            <TextValidator
                                className="mb-4"
                                label="Nombre"
                                size="small"
                                name="name"
                                fullWidth
                                value={state.name || ""}
                                onChange={handleChange}
                                validators={['required']}
                                errorMessages={['Es necesario tu nombre']}
                            />
                            <TextValidator
                                className="mb-4"
                                label="Apellidos"
                                size="small"
                                name="lname"
                                fullWidth
                                value={state.lname || ""}
                                onChange={handleChange}
                                validators={['required']}
                                errorMessages={['Es necesario tu apellido']}
                            />
                        </Grid> 
                        <Grid item lg={1} md={1} sm={1}></Grid>
                        <Grid item lg={3} md={3} sm={3} xs={12}>
                        <p className="h6 text-brand">Escoge:</p>
                            <RadioGroup
                                className="mb-4"
                                value={state.gender || ''}
                                name="gender"
                                onChange={handleChange}
                                row
                            >
                                <FormControlLabel
                                    value="Hombre"
                                    control={<Radio color="primary" />}
                                    label="Hombre"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Mujer"
                                    control={<Radio color="secondary" />}
                                    label="Mujer"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Otros"
                                    control={<Radio color="primary" />}
                                    label="Otros"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <Grid 
                                container 
                                direction="row"
                                justify="space-evenly"
                                alignItems="flex-start"
                                spacing={2}
                            >
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <h3 style={{textAlign: 'center'}}>¿Eres mayor de edad?</h3>
                                </Grid>
                                <Grid item lg={7} md={7} sm={7} xs={7}>
                                    <FormControlLabel
                                        control = {
                                            <Checkbox
                                                checked={state.age_agree || false}
                                                onChange={({
                                                    target: { checked },
                                                }) =>
                                                    handleChange({
                                                        target: {
                                                            name: 'age_agree',
                                                            value: checked,
                                                        },
                                                    })
                                                }
                                                name="age_agree"
                                            />
                                        }
                                        label="Confirmo que soy mayor de edad"
                                    />
                                </Grid>
                                
                                <Grid item lg={4} md={4} sm={4} xs={4}>
                                    <TextValidator
                                        className="mb-4"
                                        label="Edad"
                                        size="small"
                                        name="age"
                                        style={{fontSize: 40}}
                                        fullWidth
                                        value={state.age || ""}
                                        onChange={handleAge}
                                        validators={['required', 'minNumber:18', 'maxNumber:120']}
                                        errorMessages={['Es necesaria tu edad', 'Edad inválida: eres menor de edad', 'Edad inválida, vamos no tienes más de 120 años.']}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                )

            case 1:
                return (
                    <Box className="m-sm-30 p-6">
                        <div className="max-w-600 mx-auto">
                            <TextValidator
                                className="mb-4"
                                label="Correo electrónico"
                                value={state.email || ""}
                                fullWidth
                                name="email"
                                disabled={state.email ? true : false}
                                onChange={handleChange}
                                InputProps={{
                                    startAdornment: (<InputAdornment position="start"><Mail/></InputAdornment>)
                                }}
                                validators={['required', 'isEmail']}
                                errorMessages={[
                                    'Este campo es obligatorio',
                                    'Correo no válido',
                                ]}
                            />
                            <Divider className="mb-6" />
                            <TextValidator
                                className="mb-4"
                                label="Dirección"
                                name="address"
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
                                errorMessages={[
                                    'Este campo es obligatorio'
                                ]}
                            />
                            <Divider className="mb-8" />
                            <PhoneInput
                                defaultCountry="MX"
                                className="mb-4"
                                label="Teléfono"
                                name="phone"
                                fullWidth
                                value={state.phone || ""}
                                onChange={handlePhone}
                                placeholder="3300000000"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Phone/>
                                    </InputAdornment>
                                )}}
                                validators={['required']}
                                errorMessages={[
                                    'Este campo es obligatorio'
                                ]}
                            />
                            <Divider className="mb-8" />
                            <p className="h5">El teléfono que pongas debe contener clave de país. Ejemplo: +52133XXXXXXXX</p>
                        </div>
                    </Box>
                )
            
            case 2:
                return (
                    <Grid 
                        container 
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={2} 
                        className="m-sm-30 p-6"
                    >
                        <div className="max-w-600 mx-auto">
                            <h4>Selecciona una fotografía para tu perfil</h4>
                            <Divider className="mb-8" />
                            { imgPreview }
                            <input
                                accept="image/*"
                                name="img"
                                type="file"
                                id="contained-button-file"
                                className={classes.input}
                                onChange={onImageChange}
                            />          
                            <label  htmlFor="contained-button-file">
                                <Button className="x-center" variant="contained" color="primary" component="span">
                                        <Icon style={{marginRight: 10,}}>upload</Icon>Subir 
                                </Button>
                            </label>

                        </div>
                    </Grid> 
                )

            

            default:
                return ''
        }
    }

    
    var imgPreview = (<div className="image-container">Seleccione una imagen para la vista previa</div>)
    
    if (state.file) {
      imgPreview = (<div className="image-container" ><img src={imgRender} alt="icon" width="200" /></div>);
    }

    useEffect(() => {
        setMessage("")
    }, [activeStep])

    useEffect(() => {
        console.log("Image changed successfully!")
        imgPreview = (<div className="image-container" ><img src={imgRender} alt="icon" width="200" /></div>);
    }, [imgRender])
        

    const handleNext = () => {
        if (activeStep === 0) {
            if (state.name === "" || state.name === undefined) {
                setMessage("Escribe tu(s) nombre(s), por favor.");
            } else if (state.lname === "" || state.lname === undefined) {
                setMessage("Escribe tus apellidos.");
            } else if (state.gender === "" || state.gender === undefined) {
                setMessage("Selecciona tu genero");
            } else if (!state.age_agree || state.age_agree === undefined) {
                setMessage("Acepta la casilla de mayoría de edad. Debes ser verificar que eres mayor de edad")
            } else if (state.age === "" || state.age === undefined) {
                setMessage("Por favor, indica la edad que tienes. No puedes dejar el campo vacío")
            } else if (isNaN(state.age)) {
                setMessage("La edad capturada no es válida")
            } else if (state.age < 18) {
                setMessage("La edad no es válida, incumples con la mayoría de edad.")
            } else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1)
            }
        } else if (activeStep == 1) {
            if (state.email === "" || state.email === undefined) {
                setMessage("Introduce un correo");
            } else if (state.mail === "" || state.lname === undefined) {
                setMessage("Escribe tus apellidos.");
            } else if (state.gender === "" || state.gender === undefined) {
                setMessage("Selecciona tu genero");
            } else if (!state.age_agree || state.age_agree === undefined) {
                setMessage("Acepta la casilla de mayoría de edad. Debes ser verificar que eres mayor de edad")
            } else if (state.age === "" || state.age === undefined) {
                setMessage("Por favor, indica la edad que tienes. No puedes dejar el campo vacío")
            } else if (isNaN(state.age)) {
                setMessage("La edad capturada no es válida")
            } else if (state.age < 18) {
                setMessage("La edad no es válida, incumples con la mayoría de edad.")
            } else {
                setActiveStep((prevActiveStep) => prevActiveStep + 1)
            }
        }
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    return(
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >   
            { loading 
            ?   <Card className={classes.cardLoading}><div className="mt-10 mb-10 ml-10 mr-10"><Loading /></div></Card>
            :   <Card className={classes.card}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper> 
                    <Grid 
                        container 
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={2} >
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Grid 
                                container 
                                direction="column"
                                justify="center"
                                alignItems="center"
                                spacing={2}  
                                className="p-8 h-full">
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    {activeStep === steps.length ? (
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
                                            <ValidatorForm onSubmit={handleNext}>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    {getSetpContent(activeStep)}
                                                </Grid>
                                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                                    <Grid 
                                                        container 
                                                        direction="row"
                                                        justify="center"
                                                        alignItems="center"
                                                        spacing={2}   
                                                        className="flex mt-3"
                                                    >
                                                        <Button className="capitalize"
                                                                variant={activeStep === 0 ? 'text' : 'contained'}
                                                                color={activeStep === 0 ? 'primary' : 'secondary'}
                                                                disabled={activeStep === 0}
                                                                onClick={handleBack}
                                                            >
                                                                Volver
                                                        </Button>
                                                        <span className="mx-2 ml-5 mr-5">ó</span>
                                                        {activeStep === 2 ? 
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={handleFormSubmit}
                                                        >
                                                            Enviar respuestas <Icon className="ml-5">send</Icon>
                                                        </Button>
                                                        :
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            type="submit"
                                                            onClick={handleNext}
                                                        >
                                                            Siguiente
                                                        </Button>
                                                        }
                                                        
                                                        
                                                    </Grid>
                                                </Grid>
                                            </ValidatorForm>
                                        </div>
                                    )}
                                </Grid>
                                {message && ( // TODO:@esq Darle más formato a ese mensaje, muestra los errores que pueden ir ocurriendo
                                    <p className="text-error h4 mt-5">{message}</p>
                                )}          
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            }
        </div>
    )
}

export default UserDataForm