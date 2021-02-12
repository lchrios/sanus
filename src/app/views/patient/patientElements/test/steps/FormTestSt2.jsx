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

const FormTestSt2 = () => {
    
   

    return (
        <Card className="m-sm-30 p-6">
                <p className="mt-0 mb-1">
                ¿Afecta el rendimiento académico o las actividades laborales y/o la salud?
                </p>
                <FormControl component="fieldset" className="mb-4">
                    <RadioGroup name="status">
                        <FormControlLabel
                            className="h-32"
                            value="Sí"
                            control={<Radio color="secondary" />}
                            label="Sí"
                        />
                        <FormControlLabel
                            className="h-32"
                            value="No"
                            control={<Radio color="secondary" />}
                            label="No"
                        />
                    </RadioGroup>
                </FormControl>
                <p className="mt-0 mb-1">
                ¿Ha acudido con anterioridad a un proceso terapeutico?
                </p>
                <FormControl component="fieldset" className="mb-4">
                    <RadioGroup name="status">
                        <FormControlLabel
                            className="h-32"
                            value="Sí"
                            control={<Radio color="secondary" />}
                            label="Sí"
                        />
                        <FormControlLabel
                            className="h-32"
                            value="No"
                            control={<Radio color="secondary" />}
                            label="No"
                        />
                    </RadioGroup>
                </FormControl>
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
