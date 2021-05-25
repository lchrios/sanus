import {
    Badge,
    Card,
    Divider,
    Fab,
    Grid,
    Icon,
    Button,
    IconButton,
    Table,
    TableBody,
    Avatar,
    TableCell,
    TableRow,
    CircularProgress
} from '@material-ui/core'
import React, { Fragment, useEffect, useState } from 'react'
import history from 'history.js'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import NextSessions from './NextSessions'
import { Loading } from 'app/components/Loading/Loading'
import PatientsList from './PatientsList'
import NextSessionsEmpty from './NextSessionsEmpty'
import DashboardBlogs from './DashboardBlogs'

const usestyles = makeStyles(({ palette, ...theme }) => ({
    profileContent: {
        marginTop: -345,
        paddingTop: 74,
        paddingRight: 30,
        paddingLeft: 4,
        '& .menu-button': {
            display: 'none',
        },

        '@media only screen and (max-width: 959px)': {
            marginTop: -390,
            paddingTop: 24,
            paddingRight: 16,
            paddingLeft: 16,
        },

        '@media only screen and (max-width: 767px)': {
            marginTop: -410,
            paddingTop: 16,
            paddingRight: 16,
            paddingLeft: 16,
            '& .menu-button': {
                display: 'flex',
            },
        },
    },

    cardLeftVerticalLine: {
        '&:after': {
            content: '" "',
            position: 'absolute',
            height: 35,
            width: 5,
            top: -30,
            background: palette.primary.main,
        },
    },

    cardGrayBox: {
        height: 220,
        width: 'calc(100% - 16px)',
        borderRadius: 8,
        backgroundColor: 'rgba(var(--body), 0.1)',
    },

    showAllPatients: {
        margin: theme.spacing(1),
      },
    
}))

const TherapistHomeContent = ({ toggleSidenav, loading, users, blogs, sessions, charge }) => {
    const classes = usestyles()
    
    const calculateSummary = () => {
        let completed_sessions = 0;
        sessions.data.forEach((ses) => {
            if (ses.state === "completada") {
                completed_sessions += 1;
            }
        })
        setSummary([
            {
                title: 'Pacientes',
                amount: users.id.length,
                icon:'person',
                route:'/tid:/patients'
            },
            {
                title: 'Sesiones agendadas',
                amount: sessions.data.length,
                icon:'event',
                route:'/:tid/appointments'
            },
            {
                title: 'Sesiones completadas',
                amount: completed_sessions,
                icon:'offline_pin',
                route: '/tid:/completedApp'
            },
        ])
    }

    const [summary, setSummary] = useState([
        {
            title: 'Pacientes',
            amount: "Cargando...",
            icon:'person',
            route:'/tid:/patients'
        },
        {
            title: 'Sesiones agendadas',
            amount: "Cargando...",
            icon:'event',
            route:'/:tid/appointments'
        },
        {
            title: 'Sesiones completadas',
            amount: "Cargando...",
            icon:'offline_pin',
            route: '/tid:/completedApp'
        },
    ])
    useEffect(() => {
        if (!loading) {
            calculateSummary();
        }
    }, [loading])


    
    return (
        <Fragment>
            <div className={classes.profileContent}>
                <div className="flex justify-end menu-button">
                    <IconButton onClick={toggleSidenav}>
                        <Icon className="text-white">menu</Icon>
                    </IconButton>
                </div>
                <div className={classes.headerCardHolder}>
                    { loading 
                    ?   <Grid container direction="column" alignItems="center"><Grid item><CircularProgress color="secondary" /></Grid></Grid> 
                    :   <Grid container spacing={3}>
                            {summary.map((project) => (
                                <Grid
                                    item
                                    lg={4}
                                    md={4}
                                    sm={12}
                                    xs={12}
                                    key={project.title}
                                >
                                    <Card className="bg-gray bg-default flex items-center justify-between p-2">
                                        <div>
                                            <span className="text-light-white uppercase">
                                                {project.title}
                                            </span>
                                            <h4 className="font-normal text-white m-0 pt-2">
                                                {project.amount}
                                            </h4>
                                        </div>
                                        <div  className="w-56 h-36">
                                            <IconButton onClick={() => history.push(project.route)}>
                                                <Icon className="text-white">{project.icon}</Icon>
                                            </IconButton>
                                        </div>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    }   
                </div>
                <div className="py-8" />
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Card className="pb-4">
                            { loading
                            ?   <div className="mt-10 mb-10"><Loading color={"primary"} size={32} /></div>
                            :   <><h4 className="text-32 px-4 pt-4 pb-0">
                                    Tus próximas citas
                                </h4>
                                { sessions.data.length === 0 
                                ? <NextSessionsEmpty/>
                                : <NextSessions sessions={sessions} users={users} /> }
                                </>
                            }        
                        </Card>
                        <div className="py-6"></div>
                        <DashboardBlogs />
                        {/*  */}
                    </Grid>
                    

                    {/**LISTA DE PACIENTES QUE CAMBIA CON LA CONDICIONAL DE PACIENTES ASIGNADOS O NO */}
                    <Grid item lg={4} md={4} sm={12} xs={12} container spacing={1}>
                        <Grid item lg={12}
                                md={12}
                                sm={12}
                                xs={12}>
                            <Card className="p-4 h-full">
                                { loading 
                                ?   <div className="mt-10 mb-10"><Loading /></div> 
                                :   <>
                                    { users?.id.length !== 0 
                                    ?    <div>
                                            <h4 className="font-medium text-muted">
                                                <Icon>group</Icon> Pacientes
                                            </h4>
                                            <div style={{maxHeight: 400, overflow: 'auto'}}>
                                                <Grid
                                                    container
                                                    direction="column"
                                                    justify="space-evenly"
                                                    alignItems="stretch"
                                                >
                                                    <PatientsList users={users} />
                                                </Grid>
                                            </div> 
                                        </div>
                                    :   <>
                                            { charge 
                                            ?   <div className="mt-12">
                                                    <div className="flex-column items-center mb-6">
                                                        <Avatar
                                                            className="w-84 h-84"
                                                            src={''}
                                                        />
                                                        <h5 className="mt-4 mb-2">No tienes pacientes</h5>
                                                        <small className="text-muted">Por ahora está tranquilo.</small>
                                                        <small className="text-muted">Espera a que alguien agende.</small>
                                                    </div>
                                                </div>
                                            : <div className="mt-12">
                                                    <div className="flex-column items-center mb-6">
                                                        <Avatar
                                                            className="w-84 h-84"
                                                            src={''}
                                                        />
                                                        <h5 className="mt-4 mb-2">No tienes pacientes, conecta tu cuenta a stripe.</h5>
                                                        <small className="text-muted">Un usuario podrá verte, hasta que conectes tu cuenta con stripe</small>
                                                    </div>
                                    
                                                    <Table className="mb-6">
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>
                                                                    <Button
                                                                    onClick={() => {
                                                                        console.log("Conecta con stripe... :D")
                                                                    }}
                                                                    variant="contained"
                                                                    color="primary"
                                                                    className="x-center"
                                                                    >

                                                                        Conecta con stripe
                                                                    </Button>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>}
                                        </>
                                    }
                                    </>
                                }
                            </Card>
                        </Grid>
                        {/**TERMINA LISTA DE PACIENTES */}
                    </Grid> 

                </Grid>
                <div className="py-2"></div>
            </div>
        </Fragment>
    )
}


export default TherapistHomeContent
