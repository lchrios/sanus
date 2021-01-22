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
import history from '../../../../../history'
import { countries } from '../../../ecommerce/Country'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const FormTestSt3 = () => {
    
    const [date, setDate] = useState(new Date())

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
