import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {
    Card,
    Grid,
    Button,
    CircularProgress,
    Stepper,
    Step,
    StepLabel,Icon
} from '@material-ui/core'
import { ValidatorForm } from 'react-material-ui-form-validator'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import history from 'history.js'
import UserProfileForm from './userProfileForm'

const getSteps = () =>{
    return ['Paso 1', 'Paso 2']   
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
    const [loading, setLoading] = useState(false)
    const classes = useStyles()
    const steps = getSteps()
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        if(activeStep == 1) {
            history.push('/:pid/home')
        }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)

    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    const getStepContent = (stepIndex) => {
        switch(stepIndex) {
            case 0: 
            return (
                <ValidatorForm onSubmit={handleNext}
                onError={(errors) => null}
                >
                    <UserDataForm />
                </ValidatorForm>
            )
            case 1: 
            return <UserProfileForm />
            default:
                return ''

        }
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
                <div>
                    
                </div>
                <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
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
                                    <div className="flex items-center">
                                        <div className="relative">
                                        
                                        {/*Esto genera error */}

                                        {/*{getStepContent(activeStep)}*/}

                                        {/*HASTA AQUÍ XD */}
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    onClick={handleNext}
                                                >
                                                    {activeStep == steps.length -1
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
                                        <span className="mx-2 ml-5">o</span>
                                        <Link to="/session/signin">
                                            <Button className="capitalize"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}>
                                                Volver
                                            </Button>
                                        </Link>
                                    </div>
                                    )}
                                </div>
                                
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default UserDataForm