import React, { useEffect, useState } from 'react'
import { Avatar, Button, Card, Grid, Icon, Dialog } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import history from 'history.js'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import api from 'app/services/api'
import NoStripeSnack from '../snackBars/NoStripeSnack'
import NoScheduleSnack from '../snackBars/NoScheduleSnack'



const useStripeStyles = makeStyles(({palette, ...theme}) => ({
    stripeConnect: {
        background: palette.primary.main,
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

const usestyles = makeStyles(({ palette, ...theme }) => ({
    sidenav: {
        marginTop: -345,
        paddingTop: 74,
        [theme.breakpoints.down('sm')]: {
            marginTop: -410,
        },
    },
}))

const TherapistHomeSidenav = ({ url, loading, therapist, charge }) => {
    const classes = usestyles()
    const str_classes = useStripeStyles()
    // const [charge, setCharge] = React.useState(false)
    const [sched, setSched] = useState(true);
    const { user } = useAuth()

    const [open, setOpen] = React.useState(false)
    
    function handleClickOpen() {
        setOpen(true)
    }
    
    function handleClose() {
        setOpen(false)
    }

    const [openS, setOpenS] = React.useState(false)

    function handleClick() {
        setOpenS(true)
    }

    function handleCloseSnack(event, reason) {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }


    function handleClickConnect() {
        console.log('Conectando con stripe', charge)
        if (charge === false) {
            history.push(`/${user.uid}/connectFailedView`)    
        } else if (charge == undefined || null) {
            api.post(`/t/${user.uid}/connect`, {
                email: user.email,
            }).then(res => {
                window.location.href=res.data.url
            })

        }
    }

    useEffect(() => {
        api.get(`/t/${user.uid}/reAuth`)
        .then(res => {
            setCharge(res.data.charges_enabled)
        })

        api.get(`/t/${user.uid}/schedule`)
        .then(res => {
            if (res.data.schedule) {
                setSched(res.data.schedule.length !== 0);
            }
        })

    },[])

   
    return (
        <div>

             {/* Dialogo de notas comienza */}
                <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle
                        id="customized-dialog-title"
                        onClose={handleClose}
                    >
                        Notas de mis sesiones
                    </DialogTitle>
                    <DialogContent dividers>
                        <Button
                        variant="contained"
                        color="primary"
                        className="x-center"
                        size="large"
                        onClick={() => history.push('/:pid/notes')}>
                            <Typography gutterBottom>
                                Crear nota
                            </Typography>
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className="bg-error" variant="outlined" size="small">
                            <Icon>clear</Icon>Cerrar
                        </Button>
                    </DialogActions>
                </Dialog>
                {/**Dialogo de notas termina */}

                  
            <div className={clsx('flex-column items-center', classes.sidenav)}>
                <Avatar
                    className="h-84 w-84 mb-5"
                    src={url}
                />
                <p className="text-white">{user.email}</p>
                <div className="py-3" />
                <div className="flex flex-wrap w-full px-12 mb-11">
                    <div className="flex-grow">
                        {/* Debería mostrar los ingresos mensuales. Conectar base de datos. */}
                        <p className="uppercase text-light-white mb-1">Ingresos</p>
                        <h4 className="font-medium text-white">$ 20,495</h4>
                    </div>
                    <div>
                        <p className="uppercase text-light-white mb-1">Calificación</p>
                        <h4 className="font-medium text-white"><Icon>star_rate</Icon> 4.75</h4>
                    </div>
                    <div />
                </div>
                <div className="px-8 pt-2 bg-default">
                    <Grid container spacing={3}>
                        <Button>
                            <Grid item>
                                <Card className="w-104 h-104 bg-primary flex justify-center items-center">
                                    <div className="text-light-white text-center">
                                        <Icon>sentiment_very_satisfied</Icon>
                                        <br />
                                        <span className="pt-4">Escritorio</span>
                                    </div>
                                </Card>
                            </Grid>
                        </Button>
                        <Button  onClick={handleClickOpen}>
                            <Grid item>
                                <Card className="w-104 h-104  flex justify-center items-center">
                                    <div className="text-light text-center">
                                        <Icon>content_paste</Icon>
                                        <br />
                                        <span className="pt-4">Notas</span>
                                    </div>
                                </Card>
                            </Grid>
                        </Button>
                        {shortcutList.map((item, ind) => (
                        <Button key={ind} onClick={() => history.push('/' + user.uid + '/' + item.route)}>
                            <Grid item>
                                <Card className="w-104 h-104 flex items-center justify-center">
                                    <div className="text-light text-center">
                                        <Icon>{item.icon}</Icon>
                                        <br />
                                        <span className="pt-4">{item.title}</span>
                                    </div>
                                </Card>
                            </Grid>
                        </Button>
                        ))}
                    </Grid>
                    <div className="py-4" />
                    <Card className="flex items-center justify-center text-primary">
                        <Button 
                            className={classes.socialButton}
                            >
                            <Icon>exit_to_app</Icon>
                            <h5 className="ml-8 text-primary font-medium mb-0">
                                Comenzar la próxima sesión
                            </h5>
                        </Button >
                    </Card>
                    <Card className="flex items-center mt-2 justify-center text-primary">
                        { charge ? null

                        : 

                        <Button 
                            fullWidth
                            onClick={handleClickConnect}
                            >
                            <h5>
                                Conectar con stripe
                            </h5>
                        </Button>
                        
                        }
                    </Card>

                    <div className="py-2"></div>
                </div>
            </div>
            {
                charge ? null : <NoStripeSnack/>  
            }
            {
                sched ? null : <NoScheduleSnack />  
            }
        </div>
    )
}

const shortcutList = [
    // {
    //     title: 'Comentarios',
    //     icon: 'comment',
    //     route: 'comments'
    // },
    {
        title: 'Horarios',
        icon: 'event',
        route: 'schedule'
    },
    {
        title: 'Pacientes',
        icon: 'group',
        route: 'patients'
    },
    {
        title: 'Mis blogs',
        icon: 'article',
        route: 'myblogs'
    },
    {
        title: 'Nuevo blog',
        icon: 'edit',
        route: 'newblog'
    },
    {
        title:'Configuración',
        icon: 'settings',
        route:'settings'
    }
]

export default TherapistHomeSidenav
