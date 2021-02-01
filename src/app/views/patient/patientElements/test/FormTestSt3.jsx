import React, { useState } from 'react'
import {
    Card,
    TextField,
} from '@material-ui/core'

const FormTestSt3 = () => {
    
    

    return (
        <Card className="m-sm-30 p-6">
            <div className="max-w-600 mx-auto">
                <div className="flex mb-4">
                    <TextField
                        className="mr-2"
                        label="¿Qué enfermedades padece o ha padecido?"
                        variant="outlined"
                        size="small"
                        multiline
                        fullWidth
                    />
                    <TextField
                        className="ml-2"
                        label="¿Toma algún medicamento?"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                </div>
            </div>
        </Card> 
    )
}






export default FormTestSt3
