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
import React, { Fragment, useState } from 'react'
import history from 'history.js'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import NextSessions from './NextSessions'
import { useEffect } from 'react'
import useAuth from 'app/hooks/useAuth'
import api from 'app/services/api'
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

const TherapistHomeContent = ({ toggleSidenav }) => {
    const { user} = useAuth()
    const [loading, setLoading] = useState(true)
    const [sessions, setSessions] = useState()
    const [patients, setPatients] = useState()
    const [blogs, setBlogs] = useState()

    useEffect(() => {
        api.get(`/t/${user.uid}/u`) 
            .then(res => {
                console.log("Pacientes obtenidos")
                setPatients(res.data)
                api.get(`/t/${user.uid}/s`) 
                .then(res => {
                    console.log("Sesiones obtenidas")
                    setSessions(res.data)
                    api.get(`/t/${user.uid}/b`) 
                    .then(res => {
                        console.log("Blogs obtenidos")
                        setBlogs(res.data)            
                        setLoading(false)
                    })
                    
                })
            })
    }, [])
     
    const classes = usestyles()
    const theme = useTheme()
    return (
        <Fragment>
            <div className={classes.profileContent}>
                <div className="flex justify-end menu-button">
                    <IconButton onClick={toggleSidenav}>
                        <Icon className="text-white">menu</Icon>
                    </IconButton>
                </div>
                <div className={classes.headerCardHolder}>
                    { loading ? <Grid container direction="column" alignItems="center"><Grid item><CircularProgress color="secondary" /></Grid></Grid> :
                        <Grid container spacing={6}>
                            {projectSummery.map((project) => (
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
                                                0
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
                            <h4 className="text-32 px-4 pt-4 pb-0">
                                Tus próximas citas
                            </h4>
                            <NextSessions />
                        </Card>
                    </Grid>

                    {/**LISTA DE PACIENTES QUE CAMBIA CON LA CONDICIONAL DE PACIENTES ASIGNADOS O NO */}
                    <Grid item lg={4} md={4} sm={12} xs={12} container spacing={1}>
                        <Grid item lg={12}
                                md={12}
                                sm={12}
                                xs={12}>
                            <Card className="p-4 h-full">
                                {patients?.length > 0 ? 
                                <div><h4 className="font-medium text-muted">
                                <Icon>group</Icon> Pacientes
                                </h4>
                                <div style={{maxHeight: 400, overflow: 'auto'}}>
                                    {patients.map((patient, index) => {
                                        return patient.isNew ?
                                        <div className="flex items-center mb-4"  style={{marginTop: '15px'}}>
                                            <Badge badgeContent="Nuevo" color='info'>
                                                <Fab className='primary'>
                                                    <h4 className='text-error m-0 font-normal'>
                                                        {patient?.name}
                                                    </h4>
                                                </Fab>
                                            </Badge>
                                            <div className="ml-4">
                                                <h5 className="m-0 mb-1 font-medium">
                                                    {patient?.name}
                                                </h5>
                                                <p className="m-0 text-muted">{patient?.location}</p>
                                            </div>
                                        </div>
                                        :
                                        <div className="flex items-center mb-4">
                                            <Fab className='primary'>
                                                <h4 className='text-error m-0 font-normal'>
                                                {patients?.name}
                                                </h4>
                                            </Fab>
                                            <div className="ml-4">
                                                <h5 className="m-0 mb-1 font-medium">
                                                {patient?.name}
                                                </h5>
                                                <p className="m-0 text-muted">{patient?.location}</p>
                                            </div>
                                        </div>
                                    })}
                                </div> </div>
                                :
                                <div className="mt-12">
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
                                </div>}
                            </Card>
                        </Grid>
                        {/**TERMINA LISTA DE PACIENTES */}


                        <Grid item lg={12}
                                md={12}
                                sm={12}
                                xs={12}>
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
                        <div className="py-3"></div>
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

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        
                    </Grid>
                </Grid>
                <div className="py-2"></div>
            </div>
        </Fragment>
    )
}

const patients = [
    {
        initials: "JH",
        name: "Jorge Hernandez",
        place: "Guadalajara, Jalisco",
        bg: "bg-light-primary box-shadow-none overflow-hidden",
        isNew: true,
        color: "primary",
        min: "text-primary m-0 font-normal"
    },
    {
        initials: "LM",
        name: "Luis Martinez",
        place: "Monterrey, Nuevo León",
        bg: "bg-light-error box-shadow-none overflow-hidden",
        isNew: false,
        color: "error",
        min: "text-error m-0 font-normal"
    },
    {
        initials: "AS",
        name: "Alma Sanchez",
        place: "Guadalajara, Jalisco",
        bg: "bg-light-green box-shadow-none overflow-hidden",
        isNew: false,
        color: "green",
        min: "text-green m-0 font-normal"
    },
    {
        initials: "MA",
        name: "Marcos Aspericueta",
        place: "Guadalajara, Jalisco",
        bg: "bg-light-info box-shadow-none overflow-hidden",
        isNew: false,
        color: "info",
        min: "text-info m-0 font-normal"
    },
    {
        initials: "JR",
        name: "Juan Robles",
        place: "Guadalajara, Jalisco",
        bg: "bg-light-error box-shadow-none overflow-hidden",
        isNew: false,
        color: "error",
        min: "text-error m-0 font-normal"
    },
    {
        initials: "JR",
        name: "Juan Robles",
        place: "Guadalajara, Jalisco",
        bg: "bg-light-error box-shadow-none overflow-hidden",
        isNew: false,
        color: "error",
        min: "text-error m-0 font-normal"
    },
    {
        initials: "JR",
        name: "Juan Robles",
        place: "Guadalajara, Jalisco",
        bg: "bg-light-error box-shadow-none overflow-hidden",
        isNew: false,
        color: "error",
        min: "text-error m-0 font-normal"
    },
] 

const projectSummery = [
    {
        title: 'Pacientes',
        amount: 11,
        icon:'person',
        route:'/tid:/patients'
    },
    {
        title: 'Sesiones agendadas',
        amount: 15,
        icon:'event',
        route:'/:tid/appointments'
    },
    {
        title: 'Sesiones completadas',
        amount: 25,
        icon:'offline_pin',
        route: '/tid:/completedApp'
    },
]

const paymentList = [
    {
        img: '/assets/images/payment-methods/master-card.png',
        type: 'Método 1',
        product: 'Descripción del método',
        amount: 909,
    },
    {
        img: '/assets/images/payment-methods/paypal.png',
        type: 'Método 1',
        product: 'Descripción del método',
        amount: 303,
    },
    {
        img: '/assets/images/payment-methods/visa.png',
        type: 'Método 2',
        product: 'Descripción del método',
        amount: 330,
    },
    {
        img: '/assets/images/payment-methods/maestro.png',
        type: 'Método 3',
        product: 'Descripción del método',
        amount: 909,
    },
    {
        img: '/assets/images/payment-methods/maestro.png',
        type: 'Método 4',
        product: 'Descripción del método',
        amount: 909,
    },
]

export default TherapistHomeContent
