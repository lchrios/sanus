import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import ErrorIcon from '@material-ui/icons/Error'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { makeStyles } from '@material-ui/core/styles'
import useAuth from 'app/hooks/useAuth'
import { Fade } from '@material-ui/core'

const variantIcon = {
    error: ErrorIcon,
}

const useStyles1 = makeStyles((theme) => ({
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}))

function MySnackbarContentWrapper(props) {
    const classes = useStyles1()
    const { className, message, onClose, variant, ...other } = props
    const Icon = variantIcon[variant]

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={onClose}
                >
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    )
}

MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info'])
        .isRequired,
}

const useStyles2 = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0),
    },
}))

export default function CustomizedSnackbars({ charges, details}) {
    const [snack, setSnack] = useState(false);
    const [state, setState] = useState({
            open: false,
        Transition: Fade,
        vertial:'top',
        horizontal:'center'
    })
    const {user} = useAuth()
    const classes = useStyles2()
    const { vertical, horizontal, open } = state

    return (
        <div className="my-4">
            <MySnackbarContentWrapper
                anchorOrigin={{vertical:'bottom',horizontal: 'center'}}
                variant="error"
                className={classes.margin}
                TransitionComponent={state.Transition}
                message={<span id="message-id">{details ? 'Tu cuenta está conectada, y completaste tus datos. Pero no puedes recibir ingresos, por favor contacta al soporte' : 'No has completado tu información para recibir pagos, presiona el botón "conectar con stripe"'  }</span>}
            />
        </div>
    )
}







// export default function NoStripeSnack(props) {
//     const classes = useStyles1()
  
   
    
    


    
//     // const handleClick = (Transition) => () => {
//         //     setState({
//             //         open: true,
//             //         Transition,
//             //     })
//             // }
            
//         // function handleClose() {
//         //     setState({
//         //         ...state,
//         //         open: false,
//         //     })
//         // }
            
        


//     return (
//         <div>
//             {/* <Button onClick={handleClick(GrowTransition)}>
//                 Grow Transition
//             </Button>
//             <Button onClick={handleClick(Fade)}>Fade Transition</Button> */}
//             {/* <Button onClick={handleClick(SlideTransition)}>
//                 Slide Transition
//             </Button> */}
//             <Snackbar
//                 backgroundColor="#b22a3c"
//                 open={state.open}
//                 onClose={handleClose}
//                 TransitionComponent={state.Transition}
//                 ContentProps={{
//                     'aria-describedby': 'message-id',
//                 }}
//                 message={<span id="message-id">No haz completado tu información para recibir pagos, presiona el botón 'conectar con stripe'</span>}
//             />
//         </div>
//     )
// }
