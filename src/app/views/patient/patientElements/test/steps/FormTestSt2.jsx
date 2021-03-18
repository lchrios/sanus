import React, { useState } from 'react'
import {
    Card,
    TextField,
    Divider,
    MenuItem,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormControl,
    Checkbox,
    Button,
} from '@material-ui/core'

const FormTestSt2 = ({ state, handleChange }) => {
    

    return (
        <Card className="m-sm-30 p-6">
            <p className="mt-0 mb-1">
            ¿Afecta el rendimiento académico o las actividades laborales y/o la salud?
            </p>
            <RadioGroup
                className="mb-4"
                value={state?.affects_life || ""}
                name="affects_life"
                onChange={handleChange}
                row    
            >
                <FormControlLabel
                    value="si"
                    control={<Radio color="primary" />}
                    label="Sí"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="no"
                    control={<Radio color="secondary" />}
                    label="No"
                    labelPlacement="end"
                />
            </RadioGroup>
            <p className="mt-0 mb-1">
            ¿Ha acudido con anterioridad a un proceso terapeutico para tratarlo?
            </p>
            <RadioGroup
                className="mb-4"
                value={state?.previous_treatment || ""}
                name="previous_treatment"
                onChange={handleChange}
                row    
            >
                <FormControlLabel
                    value="si"
                    control={<Radio color="primary" />}
                    label="Sí"
                    labelPlacement="end"
                />
                <FormControlLabel
                    value="no"
                    control={<Radio color="secondary" />}
                    label="No"
                    labelPlacement="end"
                />
            </RadioGroup>
        </Card> 
    )
}

const stayDurationList = [
    'Hace menos de una semana',
    'Hace una semana',
    'Hace un mes',
    "Hace 6 meses",
    "hace un año",
    "Hace más de un año"
]




export default FormTestSt2
