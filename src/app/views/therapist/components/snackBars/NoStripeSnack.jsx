import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import Grow from '@material-ui/core/Grow'
import { SettingsSharp } from '@material-ui/icons'
import api from 'app/services/api'
import useAuth from 'app/hooks/useAuth'

function SlideTransition(props) {
    return <Slide {...props} direction="up" />
}

function GrowTransition(props) {
    return <Grow {...props} />
}

export default function NoStripeSnack() {
    const [snack, setSnack] = useState(false);
    const [state, setState] = useState({
        open: false,
        Transition: Fade,
    })
    
    const {user} = useAuth()


    
    // const handleClick = (Transition) => () => {
        //     setState({
            //         open: true,
            //         Transition,
            //     })
            // }
            
        function handleClose() {
            setState({
                ...state,
                open: false,
            })
        }
            
        useEffect(() => {
            api.get(`/t/${user.uid}/reAuth`)
            .then(res => {
                console.log(res,'HOLA ESTE ES EL REAUTH de SNACK')
                if (res.data.details_submitted === false) {
                    setState({
                        open:true,

                    })
                }
            })
        },[])


    return (
        <div>
            {/* <Button onClick={handleClick(GrowTransition)}>
                Grow Transition
            </Button>
            <Button onClick={handleClick(Fade)}>Fade Transition</Button> */}
            {/* <Button onClick={handleClick(SlideTransition)}>
                Slide Transition
            </Button> */}
            <Snackbar
                open={state.open}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">I love snacks</span>}
            />
        </div>
    )
}
