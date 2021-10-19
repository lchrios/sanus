import React, { useEffect, useState } from 'react'
import history from '../../../../../history';
import { Avatar, Button, Card, CircularProgress, Grid, Icon} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useAuth from 'app/hooks/useAuth'
import api from 'app/services/api';
import { Loading } from 'app/components/Loading/Loading';

const usestyles = makeStyles(({ palette, ...theme }) => ({
    close: {
        padding: theme.spacing(0.5),
    },
    sidenav: {
        zIndex:91,
        // paddingTop: 150,
        // paddingBottom:150,
        // [theme.breakpoints.down('md')]: {
        //     marginTop: -50,
        // },
        marginTop: -345,
        paddingTop: 74,
        paddingBottom: 600,
        [theme.breakpoints.down('sm')]: {
            marginTop: -50,
        },
    },
}))

    
const UserProfileSidenav = ({ therapist, loading, url }) => {

    const { user } = useAuth();
    const classes = usestyles();
    
//funciones de control abierto-cerrado
    const [open, setOpen] = useState(false)

    function handleClickOpen() {
        setOpen(true)
    }
    
    function handleClose() {
        setOpen(false)
    }

    const [openS, setOpenS] = useState(false)

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
            <div className={clsx('flex-column text-white items-center overflow-hidden', classes.sidenav)}>
                {   loading
                ?   <Loading />
                :   <>
                        <Avatar
                            className="h-84 w-84"
                            src={url}
                        />
                        {/* Despliega nadamás el correo */}
                        <p className="">{user.displayName || user.email}</p>
                        <div className="flex flex-wrap w-full px-12 mb-6">
                            <div className="flex-grow">
                                <p className="uppercase mb-1">Edad</p>
                                <h4 className="font-medium">{user.age}</h4>
                            </div>
                            <div>
                                <p className="uppercase mb-1">Telefono</p>
                                <a className="font-medium h5">{user.phone}</a>
                            </div>
                            <div />
                        </div>
                    </>   
                }
                
                <div className="px-8 pt-4 mt-12 bg-default">
                    <Grid container spacing={3}>
                        <Button onClick={() => history.push('/'+user.uid+'/home')}>
                            <Grid item>
                                <Card className="bg-secondary w-104 h-104 flex justify-center items-center">
                                    <div className="text-center">
                                        <Icon>home</Icon>
                                        <br />
                                        <span className="pt-4">Home</span>
                                    </div>
                                </Card>
                            
                            </Grid>
                        </Button>
                        {shortcutList.map((item, ind) => (
                            <div key={ind}>
                                <Button  onClick={() =>{
                                history.push(`/${user.uid}/${item.route}`)  
                                }}>
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
                            </div>
                        ))}
                    </Grid>
                    <div className="py-4" />
                    { loading ? <Grid container direction="column" alignItems="center"><Grid item><CircularProgress /></Grid></Grid> :
                        <div className="flex items-center justify-center text-primary" style={{ display: therapist !== undefined ? "block" : "none" }}>
                            <Button onClick={() => {
                                // window.location.href = therapist.zoomurl !== undefined  ? therapist.zoomurl : "https://zoom.us/j/95739401999?pwd=dkh2NGQxcXBTYWJWRHlRM3U4UnVPQT09"  
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
        route: 'sessions'
    },
    {
        title: 'Buscar',
        icon: 'search',
        route: 'browse'
    },
    // {
    //     title: 'Configuración',
    //     icon: 'build',
    //     route: '/sessions'
    // },
    // {
    //     title: 'Terapeuta',
    //     icon: 'group',
    //     route: 'sessions'
    // },
]

export default UserProfileSidenav
