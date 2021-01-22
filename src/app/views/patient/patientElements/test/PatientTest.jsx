import React, { useState } from 'react'
import {
    TextField,
    Icon,
    Button,
    StepLabel,
    Step,
    Stepper,
    Grid,
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import history from '../../../../../history'
import FormTest from './FormTest'
import FormTestSt2 from './FormTestSt2'
import FormTestSt3 from './FormTestSt3'
import SliderTest from './SliderTest';
import SliderTest2 from './SliderTest2';
import useAuth from 'app/hooks/useAuth'


const getSteps = () => {
    return ['Paso 1', 'Paso 2', 'Paso 3']
}


export default function PatientTest() {

    const [activeStep, setActiveStep] = useState(0)
    const {user} = useAuth()
    const steps = getSteps()

    const handleNext = () => {
        if(activeStep == 2 ) {
            history.push('/'+ user.uid +'/browse')
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    const handleChange = ({ target: { name, value } }) => {
        console.log(name + ": " + value)
    }

    const handleSubmit1 = () => {
        handleNext()
    }
    

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return (
                
                <ValidatorForm 
                    onSubmit={handleNext}
                    onError={(errors) => null}
                    >
                    <FormTest />
                </ValidatorForm>
                )
                
            case 1:
                return <FormTestSt2 />
            case 2:
                return <FormTestSt3 />          
            default:
                return ''
        }
    }    

    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
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
                    <div>
                        <Grid item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}>
                            {getStepContent(activeStep)}
                        </Grid>
                        <div className="pt-6">
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
                                onClick={handleNext}
                            >
                                {activeStep === steps.length - 1
                                    ? 'Terminar y buscar terapeuta'
                                    : 'SIguiente'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
