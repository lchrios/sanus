import React from 'react'
import history from 'history.js'
import { Card, Button } from '@material-ui/core'
import useAuth from 'app/hooks/useAuth'

const PreTest = ({ handleChange }) => {

    const { user } = useAuth()

    return (  
        <div className="max-w-600 mx-auto mt-15 mb-15" style={{textAlign: 'center'}}>
            <h3>Antes de comenzar, por favor selecciona un terapeuta</h3>
            <Button
                className="mt-2 mb-2" 
                variant="contained"
                color="secondary"
                onClick={() => history.push(`/${user.uid}/browse`)}
            >
                Seleccionar terapeuta
            </Button>
        </div>
    )
    
}

export default PreTest;