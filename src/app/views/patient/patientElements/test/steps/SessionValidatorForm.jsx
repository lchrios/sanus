import React from 'react'
import {
    Card,
    TextField,
    Divider,
    MenuItem,
} from '@material-ui/core'
import CheckBox from '../components/CheckBox'

const SessionValidatorForm = ({ handleChangeCheck, loading, state }) => {

    return(
        <Card className="" >
            <div className="max-w-300 mx-auto">
                <h4>¿Esta es tu primera sesión?</h4>
                <p>
                    Por favor responde con honestidad
                </p>
                <Divider className="mb-8" />
              <CheckBox state={state} loading={loading} handleChangeCheck={handleChangeCheck} />
            </div>
        </Card>
    )
}

export default SessionValidatorForm 