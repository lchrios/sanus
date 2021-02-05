import React, { useState } from 'react'
import {
    Card,
    TextField,
    Divider,
    MenuItem,
} from '@material-ui/core'
const UserDataForm = () => {

    return (
        <Card className="m-sm-30">
            <div className="max-w-600 mx-auto">
                <h4>Responde este formulario para comenzar</h4>
                <p>
                    Por favor responde con honestidad
                </p>
                <Divider className="mb-8" />

                <TextField
                    className="mb-4"
                    label="¿Porqué deseas comenzar una terapia?"
                    variant="outlined"
                    size="small"
                    multiline
                    fullWidth
                />
              <TextField
                    className="mb-4"
                    label="¿Hace cuanto identificas la situación?"
                    variant="outlined"
                    size="small"
                    fullWidth
                    defaultValue=""
                    select
                >
                    {stayDurationList.map((duration) => (
                        <MenuItem key={duration} value={duration}>
                            {duration}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    className="mb-4"
                    label="Describe un evento específico asociado a la situación"
                    variant="outlined"
                    size="small"
                    multiline
                    fullWidth
                />
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




export default UserDataForm