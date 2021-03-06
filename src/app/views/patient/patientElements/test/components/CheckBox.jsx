import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'


const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />)

const CheckBox = ({ loading, state, handleChangeCheck }) => {
      

    const {checkedA,checkedB, checkedC} = state;

    return (
        <FormGroup row>
            { loading ? <></> :
            <>
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            color='secondary'
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            checked={state.checks.a}
                            name="a"
                            required
                            onChange={handleChangeCheck}
                        />
                    }
                    label="Sí"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            color='secondary'
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            checked={state.checks.b}
                            name="b"
                            required                        
                            onChange={handleChangeCheck}
                        />
                    }
                    label="No"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            color='secondary'
                            checkedIcon={<CheckBoxIcon fontSize="large" />}
                            checked={state.checks.c}
                            name="c"
                            required
                            onChange={handleChangeCheck}
                        />
                    }
                    label="No lo sé"
                />
            
            </>
            }
        </FormGroup>
    )
}

export default CheckBox