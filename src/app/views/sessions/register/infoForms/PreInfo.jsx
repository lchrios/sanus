import React, { useState } from 'react'
import {
    Card,
    TextField,
    Divider,
    MenuItem,
    Checkbox,
    FormControlLabel, 
} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import {green} from '@material-ui/core/colors'

const UserPreInfo = ({ handleChange, handleAgree }) => {

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
                    name="name"
                    onChange={handleChange}
                />
                <TextField
                    className="mb-4"
                    label="Apellidos"
                    size="small"
                    name="lastname"
                    fullWidth
                    defaultValue=""
                    onChange={handleChange}
                >
                </TextField>
                <div>
                    <h3>¿Eres mayor de edad?</h3>
                    <FormControlLabel
                        control = {
                            <Checkbox 
                                onChange={handleAgree} 
                                name="age"/>
                        }
                        label="Confirmo que soy mayor de edad"
                    />
                </div>
            </div>
        </Card> 
    )
}

export default UserPreInfo