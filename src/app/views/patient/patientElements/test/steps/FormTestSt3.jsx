import React, { useState } from 'react'
import {
    Card,
    TextField,
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

const FormTestSt3 = ({ state, handleChange, handleNext }) => {
    
    

    return (
        <Card className="m-sm-30 ">
            <div className="max-w-600 mx-auto">
            <ValidatorForm onSubmit={handleNext}>
                    <TextValidator
                        className="mb-6 mt-5 w-full"
                        variant="outlined"
                        label="¿Qué enfermedades padece o ha padecido?"
                        onChange={handleChange}
                        name="pathologies"
                        value={state?.pathologies || ""}
                        validators={['required']}
                        errorMessages={['este campo es obligatorio']}
                        fullWidth
                    />
                    <TextValidator
                        className="mb-6 w-full"
                        variant="outlined"
                        label="¿Toma algún medicamento?"
                        onChange={handleChange}
                        name="meds"
                        value={state?.meds || ""}
                        validators={['required']}
                        errorMessages={['este campo es obligatorio']}
                        fullWidth
                    />
                </ValidatorForm>
            </div>
        </Card> 
    )
}






export default FormTestSt3
