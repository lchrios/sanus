import React, { useState, useEffect } from 'react'
import {
    Avatar,
    Button,
    Card,
    Divider,
    Icon,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Grid,
    CircularProgress,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import history from '../../../../../../history'
import man from 'assets/images/avatars/001-man.svg'
import useAuth from 'app/hooks/useAuth'

const usestyles = makeStyles(({ palette, ...theme }) => ({
    circular: {
        marginTop: 25,
        marginBottom: 50,
    },
    divider: {
        marginTop: 15,
        marginBottom: 10,
    }
}))


const TherapistInfoUser = ({ therapist, loading }) => {
    const classes = usestyles()
    const { user } = useAuth()

    return (
        <Grid 
            container 
            spacing={2} 
            alignItems="center"
            justify="center"
            direction="column"
        >
            {/* <Card className="pt-6" > */}
                {loading ? <CircularProgress className={classes.circular} /> :
                    <>
                    {therapist == undefined ? 
                        <>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <div className="flex-column items-center mb-6">
                                    <Avatar
                                        className="w-84 h-84"
                                        src={man}
                                    />
                                    <h5 className="mt-4 mb-2">No tienes ningún terapeuta aún</h5>
                                </div>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Table className="mb-4">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Button
                                                    onClick={() => history.push('/'+ user.uid+'/browse') }
                                                    variant="contained"
                                                    color="secondary"
                                                    className="x-center"
                                                >
                                                    Seleccionar terapeuta
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Grid>    
                        </>
                        : 
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <div className="flex-column items-center mb-6">
                                <Avatar
                                    className="w-84 h-84"
                                    src={therapist?.img}
                                />
                                <h5 className="mt-4 mb-2">{therapist.name}</h5>
                                <small className="text-muted">{therapist.cedula}</small>
                            </div>
        
                            <Divider className={classes.divider} />
                            <Grid 
                                container 
                                spacing={0}
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                
                                <Grid item lg={2} md={4} sm={4} xs={12}>
                                    Correo
                                </Grid>
                                <Grid item lg={10} md={8} sm={8} xs={12}>
                                    <div>{therapist.email}</div>
                                    <small className="px-1 py-2px bg-light-green text-green border-radius-4">
                                        EMAIL VERIFICADO
                                    </small>
                                    
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}><Divider className={classes.divider} /></Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <p style={{ textAlign: "center" }}>Experiencia</p>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}><Divider /></Grid>
                                <Grid item lg={8} md={8} sm={8} xs={12}>
                                    <p style={{ textAlign: "center" }}>{therapist.exp}</p>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}><Divider className={classes.divider} /></Grid>
                            </Grid>
        
                            <div className="flex-column items-start px-4">
                                <Button className="mb-1" variant="text" color="secondary">
                                    <Icon className="mr-2" fontSize="small">
                                        contact_phone
                                    </Icon>{''}
                                    Contactar al terapeuta
                                </Button>
        
                                <Button onClick={() => window.location.href='https://zoom.us/j/95739401999?pwd=dkh2NGQxcXBTYWJWRHlRM3U4UnVPQT09'
                                } className="mb-4" variant="text">
                                    <Icon className="mr-2" fontSize="small">
                                        comment
                                    </Icon>{' '}
                                    Iniciar sesión psicológica
                                </Button>
                            </div>
                        </Grid>
                    }
                    </>
                }
            {/* </Card> */}
        </Grid>    
    )
}



export default TherapistInfoUser;
