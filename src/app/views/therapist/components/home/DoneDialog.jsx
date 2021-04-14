import { Avatar, Button, Card, Dialog, Divider, Grid, Icon, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle } from '@material-ui/icons';
import api from 'app/services/api';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(0),
    },
  }));

const DoneDialog = ({ open, closeDone, session, sid, img }) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const confirmSession = (event) => {
        setLoading(true)
        api.post(`/s/${sid}/done`)
        .then(res => {
            console.log("Sesion actualizada con éxito")
            setLoading(false);
            closeDone();
        })
        .catch(er => {
            console.error(er);
        })
    } 

    return (
        <Dialog
            onClose={closeDone}
            open={open}
            maxWidth="sm"
            fullWidth={false}
        >
            <div className="flex justify-between items-center pl-4 pr-2 py-2 bg-primary">
                <h4 className="m-0 text-white">Confirmar sesión completada</h4>
                <IconButton onClick={closeDone}>
                    <Icon className="text-white">clear</Icon>
                </IconButton>
            </div>

            <div className="p-4">
                
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Grid // * Imagen 
                        item
                        lg={2}
                        md={2}
                        sm={2}
                        xs={12}

                    >
                       <Avatar src={img} className="ml-3 h-56 w-56"/>
                    </Grid>

                    <Grid // * Nombre y correo 
                        item
                        lg={10}
                        md={10}
                        sm={10}
                        xs={12}

                    >
                        <Grid container
                            spacing={2}
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Grid item
                                lg={7}
                                md={7}
                                sm={7}
                                xs={12}
                            >
                                <h4 className="m-1 text-gray">{session.user_name}</h4>
                                <Divider />
                                <h4 className="m-1 text-muted">{session.user_email}</h4>
                            </Grid>
                            <Grid item
                                lg={5}
                                md={5}
                                sm={5}
                                xs={12}
                            >
                                <Card elevation={2} className="bg-primary"  variant="outlined">
                                    <h4 className="m-2 text-white text-center">{session.tipo}</h4>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid // * Fecha y hora 
                        item
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}

                    >
                        <Card elevation={10} className="bg-primary">
                            <h4 className="m-2 text-white text-center">{new Date(session.start).toLocaleTimeString("es-ES", options)}</h4>
                        </Card>
                    </Grid>
                    <Grid // * Botones 
                        item
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        className="alignCenter"

                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            fullWidth
                            className={classes.button}
                            startIcon={<CheckCircle />}
                        >
                            Confirmar sesión
                        </Button>

                    </Grid>
                </Grid>
                <Divider />
                <h6 className="mt-4 text-error">Al hacer click está confirmando que la sesión se llevó a cabo exitosamente. </h6>
            </div>
        </Dialog>
    )

}

export default DoneDialog