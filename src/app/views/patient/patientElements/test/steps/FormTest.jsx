import React, { useState } from 'react'
import {
    Card,
    TextField,
    Divider,
} from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
const FormTest = ({ state, handleChange, handleNext }) => {

    return (
        <Card className="m-sm-30" >
            <div className="max-w-600 mx-auto">
                <h4>Responde este formulario para comenzar</h4>
                <p>
                    Por favor responde con honestidad
                </p>
                <Divider className="mb-8" />
                <ValidatorForm onSubmit={handleNext}>
                    <TextValidator
                        className="mb-6 w-full"
                        variant="outlined"
                        label="¿Porqué deseas comenzar una terapia?"
                        onChange={handleChange}
                        name="reason"
                        value={state?.reason || ""}
                        validators={['required']}
                        errorMessages={['este campo es obligatorio']}
                        fullWidth
                    />
                    <TextValidator
                        className="mb-3 w-full"
                        label="¿Hace cuanto identificas la situación?"
                        variant="outlined"
                        helperText="Selecciona un periodo"
                        onChange={handleChange}
                        name="time_situation_detected"
                        select
                        value={state?.time_situation_detected || ""}
                        validators={['required']}
                        errorMessages={['este campo es obligatorio']}
                        SelectProps= {
                            {native:true}
                        }
                    >
                        {stayDurationList.map((duration, index) => (
                            <option key={duration} value={index == 0 ? undefined : duration}>
                                {duration}
                            </option>
                        ))}
                    </TextValidator>
                    <TextValidator
                        className="mb-6 w-full"
                        variant="outlined"
                        label="Describe un evento específico asociado a la situación"
                        onChange={handleChange}
                        name="relatedExperience"
                        value={state?.relatedExperience || ""}
                        validators={['required']}
                        errorMessages={['este campo es obligatorio']}
                        fullWidth
                    />
                </ValidatorForm>
            </div>
        </Card> 
    )
}

const stayDurationList = [
    'Escoja alguna...',
    'Hace menos de una semana',
    'Hace una semana',
    'Hace un mes',
    "Hace 6 meses",
    "Hace un año",
    "Hace más de un año"
]




export default FormTest
