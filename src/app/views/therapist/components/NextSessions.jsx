import React, { useState } from 'react'
import {
    Card,
    Button,
    Avatar,
    Grid,
    Icon,
    MenuItem,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { MatxMenu, GoogleIcon } from 'app/components'
import api from 'app/services/api'

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}

const useStyles = makeStyles(({ palette, ...theme }) => ({
    google: {
        color: '#ec412c',
    },
    twitter: {
        color: '#039ff5',
    },
    button: {
        margin: theme.spacing(1),
      },
}))

const patients = [
    {
        name: 'Jorge Rodriguez',
        location: 'Guadalajara, Jalisco',
        time: new Date(),
        num: 1,
    },
    {
        name: 'Matha Benitez',
        location: 'Monterrey, Nuevo Leon',
        time: new Date().addHours(1),
        num: 3,
    },
    {
        name: 'Carlos Martinez',
        location: 'Aguascalientes, Aguascalientes',
        time: new Date().addHours(3),
        num: 2,
    },
]

const NextSessions = () => {

    const classes = useStyles();

    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const numberSession = 0;

    useEffect(() => {
        api.get(`/t/${user.uid}`)
    }, [])

    return (
        /**Añadir un contador para que cuando la sesión sea la más próxima muestre los botones correctos */
        <Grid container spacing={3} direction="column">
            {loading ? <Grid container direction="column" alignItems="center"><Grid item><CircularProgress color="secondary" /></Grid></Grid> :
            <>
                {userList.length == 0 ? 
                <Grid
                    item
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    >
                    <Card className="p-5">
                        <div className="flex-column  items-center   mb-4">
                            <Icon className="w-56 mb-2 ml-2" >sentiment_dissatisfied</Icon>
                            <h3 className=" capitalize pb-2">Actualmente no tienes ninguna cita agendada</h3>
                            <h5 className="text-muted">Abre tus horarios para que los usuarios puedan seleccionar alguno de los disponibles</h5>
                            <div className=" ">
                                <Button
                                    variant="contained"
                                    startIcon={<Icon>watch_later</Icon>}
                                    className={clsx("bg-light-primary hover-bg-primary text-primary px-5 mr-1", classes.button)}
                                    onClick={() => history.push('/:tid/appointments')}
                                >

                                    Abrir horarios
                                    
                                </Button>
                            </div>
                        </div>
                    </Card>
                </Grid>
                :
                <>
                    {userList.map((user) => (
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            key={user.name}>
                            <Card className="p-5">
                                <div className="flex justify-between mb-4">
                                    <Avatar className="h-56 w-56" src={user?.imgUrl} />
                                    <div>
                                        <MatxMenu
                                            menuButton={
                                                <Icon className="cursor-pointer">more_horiz</Icon>
                                            }
                                        >


                                            {/* 
                                            * TODO: AÑADIR ACTUALIZACIÓN DE HISTORIAL DE SESIONES */}
                                            <MenuItem>
                                                <Icon fontSize="small"> done </Icon>
                                                <span className="pl-4"> Marcar como terminado </span>
                                            </MenuItem>
                                            <MenuItem>
                                                <Icon fontSize="small"> account_circle </Icon>
                                                <span className="pl-4"> Ver paciente</span>
                                            </MenuItem>
                                            {/* <MenuItem>
                                                <Icon fontSize="small"> edit </Icon>
                                                <span className="pl-4"> Editar sesion </span>
                                            </MenuItem> */}

                                        </MatxMenu>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="m-0 capitalize">{user?.name}</h5>
                                    <Grid item>
                                        <h4 className="text-muted mt-2">Fecha pactada:</h4>
                                        <p className="text-muted">
                                            {user.time.toString()}
                                        </p>
                                    </Grid>
                                    <div className="mb-4">
                                        <Link className="flex mb-1 items-center" to="/">
                                            <GoogleIcon
                                                fontSize="small"
                                                className={clsx('text-14', classes.google)}
                                            />
                                            <span className="ml-2">correiopaciente@gmail.com</span>
                                        </Link>
                                    </div>
                                    <div className="flex flex-wrap ">
                                        <Button
                                            variant="contained"
                                            size="small"
                                            startIcon={numberSession == 1 ? <CheckCircle /> : <Icon>face</Icon>}
                                            className={clsx("bg-light-primary hover-bg-primary text-primary px-5", classes.button)}
                                        >
                                            {numberSession == 1 ? 'Comenzar sesión' : 'Contactar paciente'}
                                            
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            startIcon={numberSession == 1 ? <Icon>watch_later</Icon> : <Icon>visibility</Icon>}
                                            className={clsx("bg-light-primary hover-bg-primary text-primary px-5 mr-1", classes.button)}
                                        >

                                            {numberSession == 1 ? 'Posponer sesión' : 'Ver perfil de usuario'}
                                            
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </>
                }
            </>
            }
            
        </Grid>
    )
}



export default NextSessions