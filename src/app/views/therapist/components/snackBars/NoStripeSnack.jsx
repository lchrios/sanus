import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Button from '@material-ui/core/Button'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import { amber, green } from '@material-ui/core/colors'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'
import { makeStyles } from '@material-ui/core/styles'
import useAuth from 'app/hooks/useAuth'
import { Fade } from '@material-ui/core'
import api from 'app/services/api'

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

export default function CustomizedSnackbars() {
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
    // const [open, setOpen] = useState(false)

    // function handleClick() {
    //     setOpen(true)
    // }

    // function handleClose(event, reason) {
    //     if (reason === 'clickaway') {
    //         return
    //     }

    //     setOpen(false)
    // }

    // useEffect((newState) => {
    //         api.get(`/t/${user.uid}/reAuth`)
    //         .then(res => {
    //             console.log(res.data.charges_enabled,'HOLA ESTE ES EL REAUTH de SNACK');
    //             if (res.data.charges_enabled) {
    //                 setState({
    //                     open:false,
    //                     ...newState
    //                 });
    //             } else {
    //                 setState({
    //                     open:true,
    //                     ...newState
    //                 });
    //             };
    //         });
    //     },[]);

    return (
        <div>
            <MySnackbarContentWrapper
                anchorOrigin={{vertical:'bottom',horizontal: 'center'}}
                variant="error"
                open={state.open}
                className={classes.margin}
                TransitionComponent={state.Transition}
                message={<span id="message-id">No haz completado tu información para recibir pagos, presiona el botón 'conectar con stripe'</span>}
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
