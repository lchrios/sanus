import React, { useState }  from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import { Card, Grid, Button } from '@material-ui/core'



const Form = () => {

    const [state, setState] = useState({})

    const handleFormSubmit = (event) => {
        console.log(state)
    }
    
    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state,
            [name]: value,
        })
    }

    let { email } = state

    return (
        <div className="p-8 h-full bg-light-gray relative">
            <ValidatorForm onSubmit={handleFormSubmit}>
                <TextValidator
                    className="mb-6 w-full"
                    variant="outlined"
                    label="Cuentanos tu caso"
                    onChange={handleChange}
                    type="email"
                    name="email"
                    size="small"
                    value={email || ''}
                    validators={['required', 'isEmail']}
                    errorMessages={[
                        'este campo es obligatorio',
                        'correo no válido',
                    ]}
                />
                <div className="flex items-center">
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Recuperar contraseña
                    </Button>
                    <span className="ml-4 mr-2">o</span>
                    <Link to="/session/signin">
                        <Button className="capitalize">
                            Iniciar sesión
                        </Button>
                    </Link>
                </div>
            </ValidatorForm>
        </div>
  
    )
}

export default Form;