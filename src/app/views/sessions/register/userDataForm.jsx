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
    InputAdornment,
    Icon,
    TextField,
    Divider,
    Box,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core'

import firebase from 'firebase/app'
import { Home, Image, Mail, Phone } from '@material-ui/icons'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import history from '../../../../history'
import { useLocation } from 'react-router'

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
    const [activeStep, setActiveStep] = useState(2);
    const [message, setMessage] = useState("");
    const [imgRender, setImgRender] = useState();
    const { createUserWithEmailAndPassword, signInWithEmailAndPassword, assignUserRole } = useAuth();

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
                    <Box className="m-sm-30">
                        <div className="max-w-600 mx-auto">
                            <h4>Bienvenido a Iknelia, tu plataforma de soporte psicológico en línea</h4>
                            <p>
                                Por favor responde con honestidad
                            </p>
                            <Divider className="mb-8" />

                            <TextField
                                className="mb-4"
                                label="Nombre"
                                size="small"
                                name="name"
                                fullWidth
                                value={state.name || ""}
                                onChange={handleChange}
                            />
                            <TextField
                                className="mb-4"
                                label="Apellidos"
                                size="small"
                                name="lname"
                                fullWidth
                                value={state.lname || ""}
                                onChange={handleChange}
                            >
                            </TextField>
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
                                <Grid item lg={8} md={8} sm={8} xs={12}>
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
                                
                                <Grid item lg={4} md={4} sm={4} xs={12}>
                                    <TextField
                                        className="mb-4"
                                        label="Edad"
                                        size="small"
                                        name="age"
                                        style={{fontSize: 40}}
                                        fullWidth
                                        value={state.age || ""}
                                        onChange={handleAge}
                                    >
                                    </TextField>
                                </Grid>
                            </Grid>
                        </div>
                    </Box>
                )

            case 1:
                return (
                    <Box className="m-sm-30 p-6">
                        <div className="max-w-600 mx-auto">
                            <h4>Ahora, compártenos tus datos de contacto.</h4>
                            <TextField
                                className="mb-4"
                                label="Correo electrónico"
                                value={state.email || ""}
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
                            />
                            <Divider className="mb-6" />
                            <TextField
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
                            />
                            <Divider className="mb-8" />
                            <TextField
                                className="mb-4"
                                label="Teléfono"
                                name="phone"
                                fullWidth
                                value={state.phone || ""}
                                onChange={handleChange}
                                placeholder="+521XXXXXXXXXX"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Phone/>
                                    </InputAdornment>
                                )}}
                            />
                            <Divider className="mb-8" />
                            <h4>El teléfono que pongas debe contener clave de país. Ejemplo: +52133XXXXXXXX</h4>
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
        console.log(state);
    }, [state])

    useEffect(() => {
        console.log("Image changed successfully!")
        imgPreview = (<div className="image-container" ><img src={imgRender} alt="icon" width="200" /></div>);
    }, [imgRender])
        

    const handleNext = () => {
        console.log(state)
        if (activeStep == 0 && (!state.age_agree || state.age < 18 || state.age === "")) {
            setMessage(!isNaN(state.age) ? "La edad capturada no es válida" : "Debes ser verificar que eres mayor de edad")
        } else if (activeStep < 2 || (activeStep == 0 && state.age)) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
            setMessage("")

        } else if (activeStep == 2) {
            console.log(state)
            createUserWithEmailAndPassword(state)
            .then( res => {
                // * Aqui haces lo de que te mande a otro lado
                try {
                    signInWithEmailAndPassword(state.email, state.password).then(() => {
                        var user = firebase.auth().currentUser
        
                        user.getIdTokenResult()
                        .then( decodedToken => {
                            switch (decodedToken.claims.role) {
                                case "user":
                                    history.push(`/${user.uid}/home`)
                                    break;
        
                                case "therapist":
                                    history.push(`/${user.uid}/dashboard`)
                                    break;
        
                                case "admin":
                                    history.push(`/${user.uid}/analytics`)
                                    break;
                        
                                default:
                                    console.error('No role was detected')
                                    assignUserRole(user.uid).then(() => {
                                        history.push(`/${user.uid}/home`);
                                    });
                                    break;   
                            }
                        })
                        .catch( error => {
                            console.error("Error al obtener el decodedToken del user", error)
                        })
                    })
                } catch (e) {
                    console.log(e)
                    setMessage("No es posible iniciar sesión, Quizá tu contraseña sea incorrecta o es probable que no estés registrado. Intenta registrarte.")
                    setLoading(false)
                } 
            })
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
            <Card className={classes.card}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div className="p-8 h-full">
                            <div>
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
                                        <Card>
                                            {getSetpContent(activeStep)}
                                        </Card>
                                        <div className="flex mt-3">
                                            <Button className="capitalize"
                                                    variant={activeStep === 0 ? 'text' : 'contained'}
                                                    color={activeStep === 0 ? 'primary' : 'secondary'}
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                >
                                                    Volver
                                            </Button>
                                            <span className="mx-2 ml-5 mr-5">ó</span>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                onClick={handleNext}
                                            >
                                                {activeStep == steps.length - 1
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
                                        </div>
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

export default UserDataForm