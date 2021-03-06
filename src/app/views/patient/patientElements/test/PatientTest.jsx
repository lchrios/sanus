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
import PreTest from './steps/PreTest'
import SessionValidatorForm from './steps/SessionValidatorForm'
import useAuth from 'app/hooks/useAuth'
import { Loading } from 'app/components/Loading/Loading'


const getSteps = () => {
    return ['Validacion primera cita', 'Razones de visita', 'Otras preguntas']
}


const PatientTest = ({ loading, therapist }) => {
    
    const [state, setState] = useState({ 
        checks: {
            a: false, 
            b: false, 
            c: false,
        }, 
        form2a: { 
            ayes: false,
            ano: false,
        },
        form2b: {
            byes: false,
            bno: false,
        }
    })
    const [checked, setChecked] = useState(true)
    const [activeStep, setActiveStep] = useState(0)
    const {user} = useAuth()
    const steps = getSteps()

    const handleNext = () => {
        console.log(activeStep)
        if(activeStep == 2 && therapist == undefined ) {
            history.push('/'+ user.uid +'/browse')
        }

        else if(activeStep == 2 && therapist) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
            console.log(state)

            // send information
        }

        else if(checked){
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }   
    }

    const handleChangeA = (event) => {
        setState({ 
            ...state, 
            form2a: { 
                ...{
                    ayes: false,
                    ano: false
                },
                [event.target.name]: event.target.checked
            }
        })
    }

    const handleChangeB = (event) => {
        setState({ 
            ...state, 
            form2b: { 
                ...{
                    byes: false,
                    bno: false,
                },
                [event.target.name]: event.target.checked
            }
        })
    }

    const handleChangeCheck = (event) => {
        setState({ 
            ...state, 
            checks: {
                ...{ 
                    a: false, 
                    b: false, 
                    c: false 
                }, 
                [event.target.name]: event.target.checked 
            }
        })
    }

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
    
    const toggleNext = () => {
        setChecked(true)

    }

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0: 
            {/** *TODO C REGRESAR A THERPIST === UNDEFINED  */}
                if (therapist == undefined) {
                    console.log("NO THERAPIST")
                    return (
                        <PreTest />
                    )
                }
                else {
                    return (
                            <SessionValidatorForm state={state} loading={loading} handleChangeCheck={handleChangeCheck} />
                    )
                }
                break;
        /** *TODO A LOS USUARIOS NO DEBERÍA DEJARLOS CONTINUAR SIN VALIDAR QUE INTRODUJERON LA INFORMACIÓN */
            case 1: 
                return <FormTest handleChange={handleChange} /> 
            case 2: 
                return <FormTestSt2 state={state} handleChangeA={handleChangeA} handleChangeB={handleChangeB} />
            case 3: 
                return <FormTestSt3 handleChange={handleChange} /> 
            default:
                return 
        }
    }    

    return (
        <Grid container spacing={2}>
        { loading ? <Loading />
        :
        <>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Grid>
        {activeStep === steps.length ? (
            <div style={{ 
                display: "flex",
                justifyContent: "center",
                alignItems: "center", 
            }}>
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
            <>
            <Grid item
                lg={12}
                md={12}
                sm={12}
                xs={12}>
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
            </Grid> 
            </>
        )}
        </>
        }
        </Grid>
    )
}

export default PatientTest