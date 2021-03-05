import {
    Card,
    Divider,
    Grid,
    Icon,
    IconButton,
    Button,
    CircularProgress,
} from '@material-ui/core'
import React, { Fragment, useEffect, useState} from 'react'
import { makeStyles} from '@material-ui/core/styles'
import history from '../../../../../../history';
import PatientTest from '../../test/PatientTest'
import TherapistInfoUser from './TherapistInfoUser'
import PatientCalendar from '../../calendar/PatientCalendar'
import useAuth from 'app/hooks/useAuth';
import CheckoutApp from '../../changePayMeth/CheckoutApp';
import { Loading } from 'app/components/Loading/Loading';


const usestyles = makeStyles(({ palette, ...theme }) => ({
    profileContent: {
        zIndex:1,
        marginTop: -345,
        paddingTop: 74,
        paddingRight: 30,
        paddingLeft: 4,
        '& .menu-button': {
            display: 'none',
        },

        '@media screen and (max-width: 959px)': {
            // display:'block',
            //position:'absolute',
            marginTop: -390,
            paddingTop: 24,
            paddingRight: 16,
            paddingLeft: 16,
            '& .menu-button': {
                display:'flex'
            }
        },

        '@media screen and (max-width: 499px)': {
            display:'block',
            position:'absolute',
            width:'100%',
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
}))



const UserProfileContent = ({ toggleSidenav, loading, therapist, sessions }) => {
    const { user } = useAuth()
    const classes = usestyles()
    const [open, setOpen] = useState(false)
    const [sesInfo, setSesInfo] = useState([
        {
            title: "Sesiones agendadas",
            amount: 1,
        },
        {
            title: "Sesiones completadas",
            amount: 2,
        },
        {
            title: "Proxima cita",
            amount: 3,
        }
    ])

    useEffect(() => {
        if (!loading) {
            generateSessionReport()
        }
    }, [loading])

    const generateSessionReport = () => {
        var total_ses = sessions.length;
        var completed_ses = 0;
        var min_date;
        var curr_date = new Date();
        for (var i = 0; i < total_ses; i++) {
            if (sessions[i].state == 1) { // * Sesion completada
                completed_ses += 1;
            }
            var tmpDate = new Date(sessions[i].start);
            // console.log(min_date != undefined && tmpDate < min_date && sessions[i].state == 0 && tmpDate > curr_date, tmpDate)
            if (min_date == undefined && tmpDate > curr_date) {
                min_date = tmpDate
            } else if (min_date != undefined && tmpDate < min_date && sessions[i].state == 0 && tmpDate > curr_date) { // * Sesion mas proxima
                console.log("Nuevo MINIMO Enc", tmpDate);
                min_date = tmpDate;
            }
        }
        setHasTher(therapist != undefined)
        setSesInfo([
            {
                title: "Sesiones agendadas",
                amount: total_ses,
            },
            {
                title: "Sesiones completadas",
                amount: completed_ses,
            },
            {
                title: "Proxima cita",
                amount: min_date != undefined ? min_date.toUTCString() : "No tienes próxima cita",
            }
        ])
    }

    const [hasTher, setHasTher] = useState(therapist != undefined);
    const onClick1 = () => {
        history.push("/"+user.uid+"/sessions");
    }
    
    function handleClose() {
        setOpen(false)
    }

    function handleOpen() {
        setOpen(true)
    }
    return (
        <div>
            <Fragment >
                <div className={classes.profileContent}>
                    <div className="flex justify-end menu-button">
                        <IconButton onClick={toggleSidenav}>
                            <Icon className="text-white">menu</Icon>
                        </IconButton>
                    </div>
                    
                    <div>
                    { loading ? <Loading /> :
                    <>
                    { hasTher ? 
                        <Grid container spacing={1} direction="row">
                            {sesInfo.map((ses) => (
                                <Grid
                                    item
                                    lg={4}
                                    md={4}
                                    sm={12}
                                    xs={12}
                                    key={ses.title}
                                >
                                    <Card className="h-96 bg-gray bg-default flex items-center justify-between p-4">
                                        <div>
                                            <span className="text-light-white uppercase">
                                                {ses?.title }
                                            </span>
                                            <h4 className="font-normal text-white m-0 pt-2">
                                                {ses?.amount}
                                            </h4>
                                        </div>
                                        <div className="w-56 h-36">
                                            <IconButton onClick={onClick1} className="text-white">
                                                <Icon> visibility </Icon>
                                            </IconButton>
                                        </div>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        :
                        <Card className="h-150 bg-primary flex items-center justify-between ">
                            <div className="m-auto">    
                                <h4 className="m-auto font-normal text-white ">
                                    Este es tu perfil. No cuentas con ningún terapeuta todavía. Para comenzar navega por nuestro buscador, y selecciona un terapeuta.
                                </h4>
                            </div>
                            <div className="mx-auto">
                                <Button variant="contained" color="secondary" className="">
                                    ¿Necesitas ayuda?
                                </Button>
                            </div>
                        </Card> 
                    }
                    </> 
                    }
                    
                    </div>
                    <div className="py-8" />
                    <Grid container spacing={3}>
                        <Grid item lg={8} md={8} sm={12} xs={12}>
                            <Card className="pb-4 px-4">
                                <h4 className="font-medium text-muted px-4 pt-4 pb-0">
                                    Comenzar terapia
                                </h4>
                                { loading ? <Loading /> :
                                    <PatientTest therapist={therapist} loading={loading} />
                                }
                            </Card>
                            <div className="py-3"></div>
                            <Card className="py-4 elevation-z5">
                                <h4 className="font-medium text-muted px-4 pt-4 pb-0">
                                    Calendario de sesiones
                                </h4>
                                { loading ? <Grid container direction="column" alignItems="center"><Grid item><CircularProgress /></Grid></Grid> :
                                    <>
                                        { hasTher ? 
                                        <Card className="py-4 elevation-z5">
                                            <PatientCalendar />
                                        </Card> 
                                        :
                                        <>
                                            <h2 className='px-4'>No tienes ninguna sesión, para generar una sesión, primero deberás seleccionar un terapeuta.</h2>
                                            <Button className="x-center mt-4" variant="contained" color="secondary">Seleccionar terapeuta</Button>
                                        </>
                                        }
                                    </>     
                                }
                                
                            </Card>                             
                        </Grid>

                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Card className="p-4 h-1500 elevation-z5 mb-10">
                                <h4 className="font-medium text-muted pb-6 pb-0 mb-6">
                                    Tu terapeuta
                                </h4>
                                <div className="flex items-center mb-4">
                                    <TherapistInfoUser therapist={therapist} loading={loading}/>
                                </div>
                                <div className="flex items-center">
                                </div>
                            </Card>
                            {/**Elemento padre de la aplicación del checkout */}
                            <CheckoutApp />

                        </Grid>
                    </Grid>
                    <div className="py-2"></div>
                </div>
            </Fragment>
        </div>
    )
}    

const paymentList = [
    /**{
        img: '/assets/images/payment-methods/visa.png',
        type: 'Tarjeta de crédito',
        product: 'Coloca la información de tu tarjeta',
        amount: 909,
    },*/
    {
        img: '/assets/images/payment-methods/oxxo.png',
        type: 'Depósito',
        product: 'Deposita en tu oxxo cercano',
        amount: 303
    },
    {
        img: '/assets/images/payment-methods/paypal.png',
        type: 'Paypal',
        product: 'Conecta tu cuenta de PayPal',
        amount: 330,
    },
    {
        img: '/assets/images/payment-methods/transferencia.png',
        type: 'Transferencia',
        product: 'Transfiere a través de tu banco',
        amount: 909,
    }
]

export default UserProfileContent
