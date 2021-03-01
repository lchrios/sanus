import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { CheckBox } from "@material-ui/icons"
import { Stepper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        marginRight: theme.spacing(3),
        marginLeft: theme.spacing(3),
    },
    group: {
        margin: theme.spacing(1, 0),
    },
}))

export default function SimpleRadio() {
    const classes = useStyles()
    const [value, setValue] = React.useState('')

    function handleChange(event) {
        setValue(event.target.value)
    }

    return (
        <div>
           
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Método</FormLabel>
                    <RadioGroup
                        aria-label="Depósito"
                        name="gender1"
                        className={classes.group}
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value="Tarjeta"
                            control={<Radio />}
                            label="Tarjeta"
                            
                        />
                        <FormControlLabel
                            value="PayPal"
                            control={<Radio />}
                            label="Paypal"
                        />
                        <FormControlLabel
                            value="transferencia"
                            control={<Radio />}
                            label="Transferencia"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    )
}
