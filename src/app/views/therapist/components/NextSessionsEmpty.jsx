import React, { useState } from 'react'
import {
    Card,
    Button,
    Avatar,
    Grid,
    Icon,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import history from 'history.js'

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

const NextSessionsEmpty = () => {

    const classes = useStyles()

    const [userList, setUserList] = useState(patients)

    const numberSession = 0

    return (
        /**Añadir un contador para que cuando la sesión sea la más próxima muestre los botones correctos */
        <Grid container spacing={3} direction="column">
            
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
           
        </Grid>
    )
}



export default NextSessionsEmpty