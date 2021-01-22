import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'

import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 600 + 24 * 2,
        padding: 24,
    },
    margin: {
        height: theme.spacing(3),
    },
}))

function ValueLabelComponent(props) {
    const { children, open, value } = props

    const popperRef = React.useRef(null)
    React.useEffect(() => {
        if (popperRef.current) {
            popperRef.current.update()
        }
    })

    return (
        <Tooltip
            PopperProps={{
                popperRef,
            }}
            open={open}
            enterTouchDelay={0}
            placement="top"
            title={value}
        >
            {children}
        </Tooltip>
    )
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
}

const iOSBoxShadow =
    '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)'

const marks = [
    {
        value: 0,
    },
    {
        value: 30,
    },
    {
        value: 60,
    },
    {
        value: 90,
    },
    {
        value: 100
    }
]

const IOSSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus,&:hover,&$active': {
            boxShadow:
                '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 11px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        backgroundColor: 'currentColor',
    },
})(Slider)


export default function SliderTest() {
    const classes = useStyles()

    return (
        <Grid item
        lg={12}
        md={12}
        sm={12}
        xs={12}>
        <Paper className={classes.root}>
            <Typography gutterBottom>Del 1 al 100, ¿Cuánto afecta a tu rendimiento académico, laboral y/o la salud?</Typography>
            <div className="py-2"></div>
            <IOSSlider
                aria-label="iOS slider"
                defaultValue={0}
                marks={marks}
                valueLabelDisplay="on"
            />
            <div className={classes.margin} />
            <Typography gutterBottom>¿Te sientes cómodo con una terapia en línea?</Typography>
            <div className="py-2"></div>
            <IOSSlider
                aria-label="iOS slider"
                defaultValue={60}
                marks={marks}
                valueLabelDisplay="on"
            />
            <div className={classes.margin} />
            <Typography gutterBottom>¿Cuán dispuesto estás a mejorar la situación con la terapia?</Typography>
            <div className="py-2"></div>
            <IOSSlider
                aria-label="iOS slider"
                defaultValue={60}
                marks={marks}
                valueLabelDisplay="on"
            />
            <div className={classes.margin} />
        </Paper>
        </Grid>
    )
}
