import React, { useState } from 'react'
import {
    Card,
    TextField,
} from '@material-ui/core'

const FormTestSt3 = () => {
    
    

    return (
        <Card className="m-sm-30 ">
            <div className="max-w-600 mx-auto">
                
                    <TextField
                        className="mr-1 mb-4"
                        label="¿Qué enfermedades padece o ha padecido?"
                        variant="outlined"
                        multiline
                        fullWidth
                    />
                    <TextField
                        className="mr-1 mb-4"
                        label="¿Toma algún medicamento?"
                        variant="outlined"
                        fullWidth
                    />
                
            </div>
        </Card> 
    )
}






export default FormTestSt3
