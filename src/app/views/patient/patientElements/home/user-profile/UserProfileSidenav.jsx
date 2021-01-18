import React from 'react'
import history from '../../../../../../history';
import { Avatar, Button, Card, Grid, Icon, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
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

const UserProfileSidenav = () => {
    const classes = usestyles()
    var user = firebase.auth().currentUser
    return (
        <div className={clsx('flex-column items-center', classes.sidenav)}>
            <Avatar
                className="h-84 w-84 mb-5"
                src="/assets/images/face-7.jpg"
            />
            <p className="text-white">{user.displayName || user.email}</p>
            <div className="py-3" />
            <div className="flex flex-wrap w-full px-12 mb-11">
                <div className="flex-grow">
                    <p className="uppercase text-light-white mb-1">usuario</p>
                    <h4 className="font-medium text-white">1163</h4>
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
    )
}

const shortcutList = [
    {
        title: 'diagnósticos',
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
