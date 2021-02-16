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

const CheckBox = ({ toggleNext }) => {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
    })

    const handleChange = (name) => (event) => {
        toggleNext()
        setState({ checkedA: false, checkedB: false, checked: false})
        setState({ ...state, [name]: event.target.checked })
    }

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Checkbox
                        icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                        color='secondary'
                        checkedIcon={<CheckBoxIcon fontSize="large" />}
                        value="checkedA"
                        onChange={handleChange}
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
                        value="checkedB"
                        onChange={handleChange}
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
                        value="checkedC"
                        onChange={handleChange}
                    />
                }
                label="No lo sé"
            />
        </FormGroup>
    )
}

export default CheckBox