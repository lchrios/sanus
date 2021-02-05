import React from 'react'
import { Avatar, Button, Card, Grid, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AddCircle } from '@material-ui/icons'
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

const TherapistHomeSidenav = () => {
    const classes = usestyles()
    const { user } = useAuth()
    return (
        <div className={clsx('flex-column items-center', classes.sidenav)}>
            <Avatar
                className="h-84 w-84 mb-5"
                src="/assets/images/face-7.jpg"
            />
            <p className="text-white">{user.name}</p>
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
                    <Grid item>
                        <Card className="w-104 h-104 bg-primary flex justify-center items-center">
                            <div className="text-light-white text-center">
                                <Icon>sentiment_very_satisfied</Icon>
                                <br />
                                <span className="pt-4">Escritorio</span>
                            </div>
                        </Card>
                    </Grid>
                    {shortcutList.map((item, ind) => (
                        <Grid item key={ind}>
                            <Card className="w-104 h-104 flex items-center justify-center">
                                <div className="text-muted text-center">
                                    <Icon>{item.icon}</Icon>
                                    <br />
                                    <span className="pt-4">{item.title}</span>
                                </div>
                            </Card>
                        </Grid>
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

                <div className="py-2"></div>
            </div>
        </div>
    )
}

const generateRandomId = () => {
    let tempId = Math.random().toString()
    let id = tempId.substr(2, tempId.length - 1)
    return id
}

const therapist_data = [
    {
        name: "Mark Zuckerberg",
        email: "mark.zucaritas@gmail.com",
        age: 56,
        phone: "3156548942",
        img: "/src/assets/images/faces/2.jpg",
        patients: [],
        sessions: [],
        address: null,
        cons_add: null,
        zoom: "URL de zoom",
        cedula: "cedula",
        exp: "Experiencia",
        location: [
            "Guadalajara", "Jalisco", "Mexico" 
        ]
    },
    {
        name: "Porfirio Díaz",
        email: "donporfirio@gmail.com",
        age: 56,
        phone: "3156548942",
        img: "/src/assets/images/faces/3.jpg",
        patients: [],
        sessions: [],
        address: null,
        cons_add: null,
        zoom: "URL de zoom",
        cedula: "cedula",
        exp: "Experiencia",
        location: [
            "Guadalajara", "Jalisco", "Mexico" 
        ]
    },
    {
        name: "Alma Marcela",
        email: "alma.marcela@gmail.com",
        age: 56,
        phone: "3156548942",
        img: "/src/assets/images/faces/4.jpg",
        patients: [],
        sessions: [],
        address: null,
        cons_add: null,
        zoom: "URL de zoom",
        cedula: "cedula",
        exp: "Experiencia",
        location: [
            "Guadalajara", "Jalisco", "Mexico" 
        ]
    },
    {
        name: "Javier Hernandez",
        email: "elchicharito@gmail.com",
        age: 56,
        phone: "3156548942",
        img: "/src/assets/images/faces/5.jpg",
        patients: [],
        sessions: [],
        address: null,
        cons_add: null,
        zoom: "URL de zoom",
        cedula: "cedula",
        exp: "Experiencia",
        location: [
            "Guadalajara", "Jalisco", "Mexico" 
        ]
    },
    {
        name: "Sean Smith",
        email: "sean.s@gmail.com",
        age: 56,
        phone: "3156548942",
        img: "/src/assets/images/faces/9.jpg",
        patients: [],
        sessions: [],
        address: null,
        cons_add: null,
        zoom: "URL de zoom",
        cedula: "cedula",
        exp: "Experiencia",
        location: [
            "Guadalajara", "Jalisco", "Mexico" 
        ]
    },
    {
        name: "Aldeous Huxley",
        email: "aldeous.h@gmail.com",
        age: 56,
        phone: "3156548942",
        img: "/src/assets/images/faces/10.jpg",
        patients: [],
        sessions: [],
        address: null,
        cons_add: null,
        zoom: "URL de zoom",
        cedula: "cedula",
        exp: "Experiencia",
        location: [
            "Guadalajara", "Jalisco", "Mexico" 
        ]
    },
    {
        name: "Marie Curie",
        email: "marie.curie@gmail.com",
        age: 56,
        phone: "3156548942",
        img: "/src/assets/images/faces/12.jpg",
        patients: [],
        sessions: [],
        address: null,
        cons_add: null,
        zoom: "URL de zoom",
        cedula: "cedula",
        exp: "Experiencia",
        location: [
            "Guadalajara", "Jalisco", "Mexico" 
        ]
    },
    {
        name: "Ernest Hemmingway",
        email: "marie.curie@gmail.com",
        age: 56,
        phone: "3156548942",
        img: "/src/assets/images/faces/13.jpg",
        patients: [],
        sessions: [],
        address: null,
        cons_add: null,
        zoom: "URL de zoom",
        cedula: "cedula",
        exp: "Experiencia",
        location: [
            "Guadalajara", "Jalisco", "Mexico" 
        ]
    },
    {
        name: "Hipster guy",
        email: "hipster@gmail.com",
        age: 56,
        phone: "3156548942",
        img: "/src/assets/images/faces/15.jpg",
        patients: [],
        sessions: [],
        address: null,
        cons_add: null,
        zoom: "URL de zoom",
        cedula: "cedula",
        exp: "Experiencia",
        location: [
            "Guadalajara", "Jalisco", "Mexico" 
        ]
    },
    {
        name: "Oprah Whinfrey",
        email: "oprah@gmail.com",
        age: 56,
        phone: "3156548942",
        img: "/src/assets/images/faces/16.jpg",
        patients: [],
        sessions: [],
        address: null,
        cons_add: null,
        zoom: "URL de zoom",
        cedula: "cedula",
        exp: "Experiencia",
        location: [
            "Guadalajara", "Jalisco", "Mexico" 
        ]
    },
    {
        name: "Belle Delphine",
        email: "belle.delphine@gmail.com",
        age: 56,
        phone: "3156548942",
        img: "/src/assets/images/faces/17.jpg",
        patients: [],
        sessions: [],
        address: null,
        cons_add: null,
        zoom: "URL de zoom",
        cedula: "cedula",
        exp: "Experiencia",
        location: [
            "Guadalajara", "Jalisco", "Mexico" 
        ]
    }
]

const shortcutList = [
    {
        title: 'estrellas',
        icon: 'star_outline',
    },
    {
        title: 'sesiones',
        icon: 'event',
    },
    {
        title: 'pacientes',
        icon: 'group',
    },
    {
        title: 'configuracion',
        icon: 'settings',
    },
    {
        title: 'finanzas',
        icon: 'payments',
    },
]

export default TherapistHomeSidenav
