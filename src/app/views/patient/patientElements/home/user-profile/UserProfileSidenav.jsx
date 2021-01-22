import React, {useState, useEffect} from 'react'
import history from '../../../../../../history';
import { Avatar, Button, Card, Dialog, Grid, Icon, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import firebase from 'firebase'

const usestyles = makeStyles(({ palette, ...theme }) => ({
    sidenav: {
        marginTop: -345,
        paddingTop: 74,
        [theme.breakpoints.down('sm')]: {
            marginTop: -410,
        },
    },
}))





    const { user } = useAuth()
    const [therapist, setTherapist] = useState()    

    useEffect(() => {
        //console.log(firebaseService.getTherapistByPatient(user.uid))
        //setTherapist(firebaseService.getTherapistByPatient(user.uid))
        firebase.firestore().collection("patients").doc(user.uid)
            .get()
            .then(doc => {
                const data = doc.data()
                if (data.therapist != null) {
                    data.therapist
                    .get()
                    .then(doc => {
                        console.log("Carta terapeuta cargada :D")
                        const ther_data = doc.data()
                        setTherapist(ther_data)
                    })
                }
            })
    }, [user.uid])   
    const classes = usestyles()
    
    //funciones de control abierto-cerrado
    const UserProfileSidenav = () => {
        const [open, setOpen] = React.useState(true)
    
    function handleClickOpen() {
        setOpen(true)
    }
    
    function handleClose() {
        setOpen(false)
    }
    

    return (
    <div>

        {/*DIALOGO QUE SE DESPLIEZA EMPIEZA*/ }
        <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email
                        address here. We will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
            {/*DIALOGO QUE SE DESPLIEGA TERMINA*/ }


        <div className={clsx('flex-column items-center', classes.sidenav)}>
            <Avatar
                className="h-84 w-84 mb-5"
                src="/assets/images/face-7.jpg"
            />
            <p className="text-white">{user.displayName || user.email}</p>
            <div className="py-3" />
            <div className="flex flex-wrap w-full px-12 mb-11">
                <div className="flex-grow">
                    <p className="uppercase text-light-white mb-1">Edad</p>
                    <h4 className="font-medium text-white">25 años</h4>
                </div>
                <div>
                    <p className="uppercase text-light-white mb-1">uso</p>
                    <h4 className="font-medium text-white">FRECUENTE</h4>
                </div>
                <div />
            </div>
            <div className="px-8 pt-2 bg-default">
                <Grid container spacing={3}>
                <Button onClick={() => history.push('/'+user.uid+'/home')}>
                    <Grid item>
                    
                        <Card className="w-104 h-104 bg-primary flex justify-center items-center">
                            <div className="text-light-white text-center">
                                <IconButton onClick={() => history.push("/"+user.uid+"/home")}>
                                    <Icon>sentiment_very_satisfied</Icon>
                                </IconButton>
                                <br />
                                <span className="pt-4">Perfil</span>
                            </div>
                        </Card>
                    
                    </Grid>
                    </Button>

                {/**BOTON QUE DEBERÍA DESPLEGAR EL DIALOGO */}    
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClickOpen}
                >
                    <Grid item >
                            <Card className="w-104 h-104 flex items-center justify-center">
                                <div className="text-muted text-center">
                                    <Icon>content_paste</Icon>
                                    <br />
                                    <span className="pt-4">Notas</span>
                                </div>
                        </Card>
                    </Grid>
                </Button>
                    {shortcutList.map((item, ind) => (
                    <Button onClick={() => history.push("/"+user.uid+item.route)}>
                        <Grid item key={ind}>
                            <Card className="w-104 h-104 flex items-center justify-center">
                                <div className="text-muted text-center">
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
                <div className="flex items-center justify-center text-primary">
                    <Button onClick={() => window.location.href="https://zoom.us/j/95739401999?pwd=dkh2NGQxcXBTYWJWRHlRM3U4UnVPQT09"
                }>
                        <Icon>sentiment_very_satisfied</Icon>
                        <h5 className="ml-8 text-primary font-medium mb-0">
                            Iniciar terapia
                        </h5>
                    </Button>
                </div>
                <div className="py-2"></div>
            </div>
        </div>
    </div>
    )
}

const shortcutList = [
    {
        title: 'Notas',
        icon: 'content_paste',
        route: '/home'
    },
    {
        title: 'sesiones',
        icon: 'date_range',
        route: '/sessions'
    },
    {
        title: 'Buscar',
        icon: 'search',
        route: '/browse'
    },
    {
        title: 'Configuración',
        icon: 'build',
        route: '/sessions'
    },
    {
        title: 'Terapeuta',
        icon: 'group',
        route: '/sessions'
    },
]

export default UserProfileSidenav
