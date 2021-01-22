import {
    Badge,
    Card,
    Divider,
    Fab,
    Grid,
    Icon,
    IconButton,
    Button
} from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import history from '../../../../../../history';
import clsx from 'clsx'
import PatientTest from '../../test/PatientTest'
import FormTest from '../../test/FormTest'
import TherapistInfoUser from './TherapistInfoUser'
import PatientCalendar from '../../calendar/PatientCalendar'
import patientRoutes from 'app/views/patient/PatientRoutes';
import useAuth from 'app/hooks/useAuth';
import axios from 'axios';


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
}))

const UserProfileContent = ({ toggleSidenav }) => {
    const classes = usestyles()
    const theme = useTheme()

    const onClick1 = () => {
        history.push("/:pid/sessions");
    }

    var { user } = useAuth() 

    return (
        <Fragment>
            <div className={classes.profileContent}>
                <div className="flex justify-end menu-button">
                    <IconButton onClick={toggleSidenav}>
                        <Icon className="text-white">menu</Icon>
                    </IconButton>
                </div>
                <div className={classes.headerCardHolder}>
                    <Grid container spacing={3}>
                        {sessionsSummery.map((sessions) => (
                            <Grid
                                item
                                lg={4}
                                md={4}
                                sm={12}
                                xs={12}
                                key={sessions.title}
                            >
                                <Card className="h-96 bg-gray bg-default flex items-center justify-between p-4">
                                    <div>
                                        <span className="text-light-white uppercase">
                                            {sessions.title}
                                        </span>
                                        <h4 className="font-normal text-white m-0 pt-2">
                                            {sessions.amount}
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
                </div>
                <div className="py-8" />
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <Card className="pb-4 px-4">
                            <h4 className="font-medium text-muted px-4 pt-4 pb-0">
                                Comenzar terapia
                            </h4>
                             <PatientTest/>
                        </Card>
                        <div className="py-3"></div>
                        <Card className="py-4 elevation-z5">
                            <PatientCalendar />
                        </Card>                             
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className="p-4 h-1500 elevation-z5 mb-10">
                            <h4 className="font-medium text-muted pb-6 pb-0 mb-6">
                                Tu terapeuta
                            </h4>
                            <div className="flex items-center mb-4">
                                <TherapistInfoUser />
                            </div>
                            <div className="flex items-center">
                            </div>
                        </Card>
                        <Card className="elevation-z5 p-4">
                            <div>
                                <h5 className="font-medium text-muted pb-6 pb-0 mb-6">
                                    Cambia tu metodo de pago
                                </h5>
                            </div>
                            
                            {paymentList.map((method, index) => (
                                <Fragment key={index}>
                                <Button onClick={() => history.push("/:pid/changepaymethod")}>
                                    <div className="py-4 px-6 flex flex-wrap items-center justify-between">
                                       
                                        <div  className="flex items-center">
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
                                </Button>
                                </Fragment>
                            ))}
                        </Card>
                    </Grid>
                </Grid>
                <div className="py-2"></div>
            </div>
        </Fragment>
    )
}

const sessionsSummery = [
    {
        title: 'Próximas sesiones',
        amount: 11,
    },
    {
        title: 'Sesiones completadas',
        amount: 15,
    }
]

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
        product: 'Deposita donde quieras',
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
