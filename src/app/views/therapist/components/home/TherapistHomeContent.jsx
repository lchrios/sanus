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

const TherapistHomeContent = ({ toggleSidenav, loading, users, blogs, sessions }) => {
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
                    :   <Grid container spacing={6}>
                            {summary.map((project) => (
                                <Grid
                                    item
                                    lg={4}
                                    md={4}
                                    sm={12}
                                    xs={12}
                                    key={project.title}
                                >
                                    <Card className="h-96 bg-gray bg-default flex items-center justify-between p-4">
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
                        <Card className="overflow-unset flex py-4">
                            <div className="w-100 min-w-100 text-center">
                                <Fab
                                    className="relative mt--14"
                                    size="medium"
                                    color="primary"
                                >
                                    <Icon>trending_up</Icon>
                                </Fab>
                                <div className="py-3"></div>
                                <IconButton size="small">
                                    <Icon>favorite</Icon>
                                </IconButton>
                                <p className="pb-4 m-0">65</p>

                                <IconButton size="small">
                                    <Icon>chat</Icon>
                                </IconButton>
                                <p className="m-0">65</p>
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center justify-between pr-4 pb-3">
                                    <h5 className="m-0 font-medium capitalize">
                                        Entrada más popular
                                    </h5>
                                    <span className="text-muted">
                                        12/03/2019
                                    </span>
                                </div>
                                <Divider className="mb-4"></Divider>
                                <h4 className="m-0 font-medium capitalize">Técnicas de relajación</h4>
                                <div className={classes.cardGrayBox}>
                                    <img
                                        className="h-full w-full border-radius-4"
                                        src="/assets/images/photo-1.jpg"
                                        alt="random"
                                    />
                                </div>
                                <p className="m-0 pt-3">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                </p>
                            </div>
                        </Card>
                        <div className="py-7"></div>
                        <Card className="overflow-unset flex py-4">
                            <div className="w-100 min-w-100 text-center">
                                <Fab
                                    className={clsx(
                                        'relative mt--14',
                                        classes.cardLeftVerticalLine
                                    )}
                                    size="medium"
                                    color="primary"
                                >
                                    <Icon>date_range</Icon>
                                </Fab>
                                <div className="py-3"></div>
                                <IconButton size="small">
                                    <Icon>favorite</Icon>
                                </IconButton>
                                <p className="pb-4 m-0">65</p>

                                <IconButton size="small">
                                    <Icon>chat</Icon>
                                </IconButton>
                                <p className="m-0">65</p>
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center justify-between pr-4 pb-3">
                                    <h5 className="m-0 font-medium capitalize">
                                        Última entrada 
                                    </h5>
                                    <span className="text-muted">
                                        12/03/2019
                                    </span>
                                </div>
                                <Divider></Divider>
                                <p className="m-0 pt-3">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                </p>
                            </div>
                        </Card>
                        <div className="py-7"></div>
                        <Card className="overflow-unset flex py-4">
                            <div className="w-100 min-w-100 text-center">
                                <Fab
                                    className={clsx(
                                        'relative mt--14',
                                        classes.cardLeftVerticalLine
                                    )}
                                    size="medium"
                                    color="primary"
                                >
                                    <Icon>star_outline</Icon>
                                </Fab>
                                <div className="py-3"></div>
                                <IconButton size="small">
                                    <Icon>favorite</Icon>
                                </IconButton>
                                <p className="pb-4 m-0">65</p>

                                <IconButton size="small">
                                    <Icon>chat</Icon>
                                </IconButton>
                                <p className="m-0">65</p>
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center justify-between pr-4 pb-3">
                                    <h5 className="m-0 font-medium capitalize">
                                        Entrada con mas likes
                                    </h5>
                                    <span className="text-muted">
                                        12/03/2019
                                    </span>
                                </div>
                                <Divider></Divider>
                                <p className="m-0 pt-3">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                </p>
                            </div>
                        </Card>
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
                                    ?    <div><h4 className="font-medium text-muted">
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
                                    :   <div className="mt-12">
                                            <div className="flex-column items-center mb-6">
                                                <Avatar
                                                    className="w-84 h-84"
                                                    src={''}
                                                />
                                                <h5 className="mt-4 mb-2">Aún no atiendes a ningún paciente</h5>
                                                <small className="text-muted">Promociona tu perfil</small>
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
                                        </div>
                                    }
                                    </>
                                }
                            </Card>
                        </Grid>
                        {/**TERMINA LISTA DE PACIENTES */}


                        <Grid 
                            item 
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                        >
                            <Card>
                                {paymentList.map((method, index) => (
                                    <Fragment key={index}>
                                        <div className="py-4 px-6 flex flex-wrap items-center justify-between">
                                            <div className="flex flex-wrap items-center">
                                                <div className="flex justify-center items-center bg-gray w-64 h-52 border-radius-4">
                                                    <img
                                                        className="w-36 overflow-hidden"
                                                        src={method.img}
                                                        alt="master card"
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <h5 className="mb-1 font-medium">
                                                        {method.type}
                                                    </h5>
                                                    <span className="text-muted">
                                                        {method.product}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {index !== paymentList.length - 1 && (
                                            <Divider />
                                        )}
                                    </Fragment>
                                ))}
                            </Card>
                        </Grid>
                    </Grid> 

                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        
                    </Grid>
                </Grid>
                <div className="py-2"></div>
            </div>
        </Fragment>
    )
}

const paymentList = [
    // {
    //     img: '/assets/images/payment-methods/master-card.png',
    //     type: 'Método 1',
    //     product: 'Descripción del método',
    //     amount: 909,
    // },
    // {
    //     img: '/assets/images/payment-methods/paypal.png',
    //     type: 'Método 1',
    //     product: 'Descripción del método',
    //     amount: 303,
    // },
    // {
    //     img: '/assets/images/payment-methods/visa.png',
    //     type: 'Método 2',
    //     product: 'Descripción del método',
    //     amount: 330,
    // },
    // {
    //     img: '/assets/images/payment-methods/maestro.png',
    //     type: 'Método 3',
    //     product: 'Descripción del método',
    //     amount: 909,
    // },
    // {
    //     img: '/assets/images/payment-methods/maestro.png',
    //     type: 'Método 4',
    //     product: 'Descripción del método',
    //     amount: 909,
    // },
]

export default TherapistHomeContent
