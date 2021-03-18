import React from 'react'
import {
    Card,
    Divider,
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@material-ui/core'

const SessionValidatorForm = ({ handleChange, state }) => {

    return(
        <Card className="" >
            <div className="max-w-300 mx-auto">
                <h4>¿Esta es tu primera ocasión tomando ayuda profesional?</h4>
                <p>
                    Por favor responde con honestidad
                </p>
                <Divider className="mb-8" />
                <RadioGroup
                    className="mb-4"
                    value={state?.first_time || ""}
                    name="first_time"
                    onChange={handleChange}
                    row    
                >
                    <FormControlLabel
                        value="si"
                        control={<Radio color="primary" />}
                        label="Sí"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="no"
                        control={<Radio color="secondary" />}
                        label="No"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="nose"
                        control={<Radio color="primary" />}
                        label="No sé"
                        labelPlacement="end"
                    />
                </RadioGroup>
            </div>
        </Card>
    )
}

export default SessionValidatorForm 