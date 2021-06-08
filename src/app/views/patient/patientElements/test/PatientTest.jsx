import React, { useEffect, useState } from 'react'
import {
    Icon,
    Button,
    StepLabel,
    Step,
    Stepper,
    Grid,
} from '@material-ui/core'
import history from '../../../../../history'
import FormTest from './steps/FormTest'
import FormTestSt2 from './steps/FormTestSt2'
import FormTestSt3 from './steps/FormTestSt3'
import PreTest from './steps/preTest'
import SessionValidatorForm from './steps/SessionValidatorForm'
import useAuth from 'app/hooks/useAuth'
import { Loading } from 'app/components/Loading/Loading'
import api from 'app/services/api'


const getSteps = () => {
    return ['Validacion primera cita', 'Razones de visita', 'Otras preguntas', 'Esto y ya']
}


const PatientTest = ({ loading, therapist, toggleHide }) => {
    
    const { user } = useAuth();
    const [state, setState] = useState()
    const [activeStep, setActiveStep] = useState(0)
    const [message, setMessage] = useState();
    const steps = getSteps()

    const handleNext = () => {
        switch (activeStep) {
            case 0:
                if (state?.first_time === undefined || state?.first_time === "") {
                    setMessage("Selecciona una respuesta");
                } else {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1)
                }
                break;
            case 1:
                if (state?.reason === undefined || state?.reason === "") {
                    setMessage("Escribe la razón de la visita, por favor. C:");
                } else if (state?.time_situation_detected === undefined || state?.time_situation_detected === "" || state?.time_situation_detected === "Escoja alguna...") {
                    setMessage("Elige un periodo, porfavor.");
                } else if (state?.relatedExperience === undefined || state?.relatedExperience === "") {
                    setMessage("Describe alguna experiencia por favor.");
                } else {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1)
                }
                break;
            case 2:
                if (state?.affects_life === undefined || state?.affects_life === "") {
                    setMessage("Selecciona una opción.");
                } else if (state?.previous_treatment === undefined || state?.previous_treatment === "") {
                    setMessage("Elige una opcion, porfavor.");
                } else {
                    setActiveStep((prevActiveStep) => prevActiveStep + 1)
                }
                break;
            case 3:
                

                // Subir info
                api.post(`/u/${user.uid}/test`, {testdata: state})
                .then( res => {
                    console.log(res.data);
                    setActiveStep((prevActiveStep) => prevActiveStep + 1)
                    toggleHide()
                })
                .catch( er => {
                    console.error(er)
                })
                break;
            default:
                break;
        } 
    }

    useEffect(() => {
        setMessage("")
    }, [activeStep])

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }
    
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0: 
                return <SessionValidatorForm state={state} handleChange={handleChange} />
            case 1: 
                return <FormTest state={state} handleNext={handleNext} handleChange={handleChange} /> 
            case 2: 
                return <FormTestSt2 state={state} handleNext={handleNext} handleChange={handleChange} />
            case 3: 
                return <FormTestSt3 state={state} handleNext={handleNext} handleChange={handleChange} /> 
            default:
                return 
        }
    }    

    return (
        <Grid container spacing={2}>
            <>{ therapist === undefined 
                ?   <PreTest />
                :
                <>
                
                {activeStep === steps.length 
                ?   <Grid 
                        container 
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item lg={12} md={12} sm={12} xs={12} >
                            <div className="flex items-center mb-4">
                                <Icon>done</Icon> <span className="ml-2 mt-5 h4">Tus respuestas han sido enviadas :D</span>
                            </div>
                        </Grid>
                        {/* <Grid item lg={12} md={12} sm={12} xs={12} >
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                onClick={handleReset}
                            >
                                Ocultar
                            </Button>
                        </Grid> */}
                    </Grid> 
                :   <>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Grid>
                        <Grid item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                        >
                            {getStepContent(activeStep)}
                        </Grid>
                        <Grid item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                        >     
                            <div className="pt-6" style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                >
                                    Volver
                                </Button>
                                <Button
                                    className="ml-4"
                                    variant="contained"
                                    color="primary"
                                    disabled={false}
                                    onClick={handleNext}
                                >
                                    {activeStep === steps.length - 1
                                        ? 'Enviar'
                                        : 'Siguiente'}
                                </Button>
                            </div>
                            {message && ( // TODO:@esq Darle más formato a ese mensaje, muestra los errores que pueden ir ocurriendo
                                    <p className="text-error h4 mt-5">{message}</p>
                            )} 
                        </Grid> 
                    </>
                }</>
            }</>
        </Grid>
    )
}

export default PatientTest