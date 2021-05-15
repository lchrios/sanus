import React, { useState } from 'react'
import {
    Card,
    Checkbox,
    FormControlLabel,
    Grid,
    Button,
    CircularProgress,
} from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import useAuth from 'app/hooks/useAuth'
import api from 'app/services/api'
import history from './../../../../../history'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 650,
        borderRadius: 12,
        margin: '1rem',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    socialButton: {
        width: '100%',
        '& img': {
            margin: '0 8px',
        },
    },
    labelLink: {
        color: palette.primary.main,
        textDecoration: 'underline',
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

const useStripeStyles = makeStyles(() => ({
    stripeConnect: {
        background: "#635bff",
        display:"inline-block",
        height: 38,
        textDecoration: "none",
        width: 180,
        borderRadius: 4,
        mozBorderRadius: 4,
        webkitBorderRadius: 4,
        userSelect: 'none',
        mozUserSelect: 'none',
        webkitUserSelect: 'none',
        msUserSelect: 'none',
        webkitfontSmoothing: 'antialiased'
        
    }
}))


const ReAuthConnect = () => {
    const [loading, setLoading] = useState(false)
    const classes = useStyles()
    const {user} = useAuth()
    
    function handleClickConnect() {
        console.log('Conectando con stripe')
        
        api.post(`/t/${user.uid}/connect`, {
            email: user.email,
        })
        .then(res => {
            console.log(res)
            window.location.href=res.data.url;
        })
        .catch(e => {
            console.error(e)
        })
    }

    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div className="p-8 mt-16 grid justify-center bg-light-gray items-center h-full">
                            <img
                                className="w-full"
                                src="/assets/images/illustrations/posting_photo.svg"
                                alt=""
                            />
                            <Button onClick={() => History.push(`/${user.uid}/dashboard`)} color="secondary" variant="contained" className="x-center" style={{"marginTop": 10}}>
                                VOLVER
                            </Button>
                            
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full ">
                        <Button 
                            className={useStripeStyles}
                            onClick={handleClickConnect}
                            >
                            <h5>
                                Conectar con stripe
                            </h5>
                        </Button >
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default ReAuthConnect