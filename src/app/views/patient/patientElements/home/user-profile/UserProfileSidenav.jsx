import React, {useState, useEffect} from 'react'
import history from '../../../../../../history';
import { Avatar, Button, Card, CircularProgress, Dialog, Grid, Icon, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Snackbar from '@material-ui/core/Snackbar'
import CloseIcon from '@material-ui/icons/Close'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import Typography from '@material-ui/core/Typography'
import { RefreshSharp } from '@material-ui/icons';

const usestyles = makeStyles(({ palette, ...theme }) => ({
    close: {
        padding: theme.spacing(0.5),
    },
    sidenav: {
        zIndex:91,
        marginTop: -345,
        paddingTop: 74,
        [theme.breakpoints.down('sm')]: {
            marginTop: -410,
        },
    },
}))

    
const UserProfileSidenav = ({ therapist, loading }) => {

    const { user } = useAuth()
    const classes = usestyles()
    
//funciones de control abierto-cerrado
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


    return (
        <div>
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
                        
                            <Card className="w-104 h-104 flex justify-center items-center">
                                <div className="text-muted text-center">
                                    <Icon>sentiment_very_satisfied</Icon>
                                    <br />
                                    <span className="pt-4">Perfil</span>
                                </div>
                            </Card>
                        
                        </Grid>
                    </Button>
                    {shortcutList.map((item, ind) => (
                        <Button key={ind} onClick={() => history.push("/"+user.uid+item.route)}>
                            <Grid item >
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
                    { loading ? <Grid container direction="column" alignItems="center"><Grid item><CircularProgress /></Grid></Grid> :
                        <div className="flex items-center justify-center text-primary" style={{ display: therapist !== undefined ? "block" : "none" }}>
                            <Button onClick={() => {
                                window.location.href = therapist.zoomurl !== undefined  ? therapist.zoomurl : "https://zoom.us/j/95739401999?pwd=dkh2NGQxcXBTYWJWRHlRM3U4UnVPQT09"  
                            }}>
                                <Icon>sentiment_very_satisfied</Icon>
                                <h5 className="ml-8 text-primary font-medium mb-0">
                                    Iniciar terapia
                                </h5>
                            </Button>
                    </div>
                    }
                    
                    <div className="py-2"></div>
                </div>
            </div>
        </div>
    )
}

const shortcutList = [
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
