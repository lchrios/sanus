import React, { useState } from 'react'
import {
    Card,
    TextField,
    Divider,
    MenuItem,
    Checkbox,
    FormControlLabel,
} from '@material-ui/core'
const UserPreInfo = () => {
    const [state, setState] =  useState({
        checkedA: false,
        checkedB: false
    })

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return (
        <Card className="m-sm-30">
            <div className="max-w-600 mx-auto">
                <h4>Bienvenido a Iknelia, tu plataforma de soporte psicológico en línea</h4>
                <p>
                    Por favor responde con honestidad
                </p>
                <Divider className="mb-8" />

                <TextField
                    className="mb-4"
                    label="Nombre"
                    size="small"
                />
              <TextField
                    className="mb-4"
                    label="Apellidos"
                    size="small"
                    fullWidth
                    defaultValue=""
                >
                </TextField>
                <div>
                    <h3>¿Eres mayor de edad?</h3>
                    <FormControlLabel
                        control = {<Checkbox checked={state.checkedA} onChange={handleChange} name="Sí"/>}
                    />
                    <FormControlLabel
                        control = {<Checkbox checked={state.checkedB} onChange={handleChange} name="No"/>}
                    />
                </div>
            </div>
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




export default UserPreInfo