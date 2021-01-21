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
import SliderTest from './SliderTest';
import SliderTest2 from './SliderTest2';


const getSteps = () => {
    return ['Paso 1', 'Paso 2', 'Paso 3', 'Paso 4']
}


export default function PatientTest() {

    const [activeStep, setActiveStep] = useState(0)
    const steps = getSteps()

    const handleNext = () => {
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
                return (<ValidatorForm 
                    onSubmit={handleNext}
                    onError={(errors) => null}
                    >
                    <Grid container spacing={3}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                className="mb-6 w-full"
                                variant="outlined"
                                label="Explica brevemente el motivo de tu solicitud"
                                onChange={handleChange}
                                type="text"
                                name="res_1_1"
                                size="small"
                                validators={['required']}
                                errorMessages={[
                                    'este campo es obligatorio'
                                ]}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                                className="mb-6 w-full"
                                variant="outlined"
                                label="¿Hace cuanto identifica la situación o problema?"
                                onChange={handleChange}
                                type="text"
                                name="res_1_2"
                                size="small"                                
                                validators={['required']}
                                errorMessages={[
                                    'este campo es obligatorio'
                                ]}
                            />
                            </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                className="mb-6 w-full"
                                variant="outlined"
                                label="Describa un evento asociado con la problematica"
                                onChange={handleChange}
                                type="text"
                                name="res_1_3"
                                size="small"
                                validators={['']}
                                errorMessages={[
                                    ''
                                ]}
                            />
                        </Grid>
                      
                    </Grid>
                </ValidatorForm>)
                
            case 1:
                return <SliderTest />
            case 2:
                return <SliderTest2 />           
            case 3:
                return <ValidatorForm 
                        onSubmit={handleNext}
                        onError={(errors) => null}
                        >
                        <Grid container spacing={3}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    label="¿Cómo te has sentido hoy?"
                                    onChange={handleChange}
                                    type="text"
                                    name="res_1_1"
                                    size="small"
                                    value={''}
                                    validators={['required']}
                                    errorMessages={[
                                        'este campo es obligatorio'
                                    ]}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    label="¿Como te has sentido ultimamente?"
                                    onChange={handleChange}
                                    type="text"
                                    name="res_1_2"
                                    size="small"
                                    value={''}
                                    validators={['required']}
                                    errorMessages={[
                                        'este campo es obligatorio'
                                    ]}
                                />
                                </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    label="¿Cuáles serían 3 debilidades tuyas?"
                                    onChange={handleChange}
                                    type="text"
                                    name="res_1_3"
                                    size="small"
                                    value={''}
                                    validators={['required']}
                                    errorMessages={[
                                        'este campo es obligatorio'
                                    ]}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    label="¿Y fortalezas?"
                                    onChange={handleChange}
                                    type="text"
                                    name="res_1_3"
                                    size="small"
                                    value={''}
                                    validators={['required']}
                                    errorMessages={[
                                        'este campo es obligatorio'
                                    ]}
                                />
                            </Grid>
                        </Grid>
                    </ValidatorForm>

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
                                Back
                            </Button>
                            <Button
                                className="ml-4"
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >
                                {activeStep === steps.length - 1
                                    ? 'Finish'
                                    : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
