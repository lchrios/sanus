import React, { useState } from 'react'
import {
    Card,
    Checkbox,
    FormControlLabel,
    Grid,
    Button,
    CircularProgress,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { MatxLogo, MatxDivider } from 'app/components'
import { makeStyles } from '@material-ui/core/styles'
import history from 'history.js'
import firebase from 'firebase/app'
import clsx from 'clsx'
import {NavLogo} from '../../landing/components/Navbar_sc/NavbarElements';
import useAuth from 'app/hooks/useAuth'
import { IkneliaLogo } from 'app/components/Brand/Brand'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 800,
        margin: '1rem',
    },
    cardLeft: {
        background: '#161c37 url(/assets/images/bg-3.png) no-repeat',
        backgroundSize: 'cover',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            minWidth: 200,
        },
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        '& span': {
            fontSize: 26,
            lineHeight: 1.3,
            fontWeight: 800,
        },
    },
    mainTitle: {
        fontSize: 18,
        lineHeight: 1.3,
        marginBottom: 24,
    },
    features: {
        '& .item': {
            position: 'relative',
            marginBottom: 12,
            paddingLeft: 20,
            '&::after': {
                position: 'absolute',
                content: '""',
                width: 4,
                height: 4,
                borderRadius: 4,
                left: 4,
                top: 7,
                backgroundColor: palette.error.main,
            },
        },
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
}))

const FirebaseLogin = () => {
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        remember: true,
    })
    const [message, setMessage] = useState('')
    const { signInWithEmailAndPassword, signInWithGoogle } = useAuth()

    const classes = useStyles()

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...userInfo }
        temp[name] = value
        setUserInfo(temp)
    }

    const handleFormSubmit = async (event) => {
        setLoading(true)
        // console.log(userInfo);
        try {
            await signInWithEmailAndPassword(userInfo.email, userInfo.password)
            var user = firebase.auth().currentUser
            console.log(user)
            history.push('/'+user.uid+'/home')
        } catch (e) {
            console.log(e)
            setMessage("No es posible iniciar sesión, Quizá tu contraseña sea incorrecta o es probable que no estés registrado. Intenta registrarte.")
            setLoading(false)
        }
    }
    const handleGoogleLogin = async (event) => {
        try {
            await signInWithGoogle()
            var user = firebase.auth().currentUser
            console.log(user)
            history.push('/'+user.uid+'/home')
        } catch (e) {
            setMessage(e.message)
            setLoading(false)
            console.log(e)
        }
    }
    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Grid container>
                    <Grid item lg={6} md={6} sm={5} xs={12}>
                        <div
                            className={clsx({
                                'py-8 px-14 h-full': true,
                                [classes.cardLeft]: true,
                            })}
                        >
                            <div className={classes.logo}>
                                    <IkneliaLogo to={"/home"}>Iknelia</IkneliaLogo>
                            </div>
                            <h1 className={classes.mainTitle}>
                                La atención que mereces
                            </h1>
                            <div className={classes.features}>
                                <div className="item">
                                    Crea tu cuenta 
                                </div>
                                <div className="item">
                                    Busca a un especialista de tu agrado
                                </div>
                                <div className="item">
                                    ¡Agenda tu cita! 
                                </div>
                            </div>
                            {/*<span className="flex-grow"></span>*/}
                            <div className="flex items-bottom p-32 flex-bottom">
                                {/* <span className="">Design & Developed By</span> */}
                                <img
                                    className="h-200 w-300"
                                    src="/assets/images/illustrations/feelings.svg"
                                    alt="feelings.svg"
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <div className="px-8 pt-8">
                            <Button
                                onClick={handleGoogleLogin}
                                variant="contained"
                                className={classes.socialButton}
                            >
                                <img
                                    src="/assets/images/logos/google.svg"
                                    alt=""
                                />
                                Iniciar sesión con Google
                            </Button>
                        </div>

                        <MatxDivider className="mt-6 px-8" text="Or" />

                        <div className="p-8 h-full relative">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Correo"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    value={userInfo.email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'este campo es obligatorio',
                                        'correo no válido',
                                    ]}
                                />
                                <TextValidator
                                    className="mb-3 w-full"
                                    label="Contraseña"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    value={userInfo.password}
                                    validators={['required']}
                                    errorMessages={['este campo es obligatorio']}
                                />
                                <FormControlLabel
                                    className="mb-3 min-w-288"
                                    name="remember"
                                    onChange={handleChange}
                                    control={
                                        <Checkbox
                                            size="small"
                                            onChange={({
                                                target: { checked },
                                            }) =>
                                                handleChange({
                                                    target: {
                                                        name: 'remember',
                                                        value: checked,
                                                    },
                                                })
                                            }
                                            checked={userInfo.remember}
                                        />
                                    }
                                    label="Recuérdame"
                                />

                                {message && (
                                    <p className="text-error">{message}</p>
                                )}

                                <div className="flex flex-wrap items-center mb-4">
                                    <div className="relative">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            disabled={loading}
                                            type="submit"
                                        >
                                            Iniciar sesión
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
                                    <span className="mr-2 ml-5">o</span>
                                    <Button
                                        className="capitalize"
                                        onClick={() =>
                                            history.push('/session/signup')
                                        }
                                    >
                                        Registrarse
                                    </Button>
                                </div>
                                <Button
                                    className="text-primary"
                                    onClick={() =>
                                        history.push('/session/forgot-password')
                                    }
                                >
                                    ¿Olvidaste tu contraseña?
                                </Button>
                            </ValidatorForm>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default FirebaseLogin
