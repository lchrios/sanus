import React, { useState, useEffect, makeStyles } from 'react'
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
} from '@material-ui/core'
import history from '../../../../../../history'
import man from 'assets/images/avatars/001-man.svg'
import useAuth from 'app/hooks/useAuth'


const TherapistInfoUser = ({ therapist }) => {

    console.log(therapist)

    const { user } = useAuth()
    
    if ( therapist == undefined) {

        return (
            
            <Card className="pt-6">
                <div className="flex-column items-center mb-6">
                <Avatar
                    className="w-84 h-84"
                    src={man}
                />
                <h5 className="mt-4 mb-2">No tienes ningun terapeuta aun</h5>
                <small className="text-muted">No hay experiencia</small>
            </div>
            
            <Table className="mb-4">
                <TableBody>
                    <div>
                        <Button
                            onClick={() => history.push('/'+ user.uid+'/browse') }
                            variant="contained"
                            color="secondary"
                            className="x-center"
                        >

                            Seleccionar terapeuta
                        </Button>
                    </div>
                </TableBody>
            </Table>
            </Card>
            
        )
    }
   
    return (

        <Card className="pt-6">
            <div className="flex-column items-center mb-6">
                <Avatar
                    className="w-84 h-84"
                    src={therapist?.img}
                />
                <h5 className="mt-4 mb-2">{therapist?.name || "No tienes ningun terapeuta aun"}</h5>
                <small className="text-muted">{therapist?.exp}</small>
            </div>

            <Divider />
            <Table className="mb-4">
                <TableBody>
                    <TableRow>
                        <TableCell className="pl-4">Email</TableCell>
                        <TableCell>
                            <div>{therapist?.email}</div>
                            <small className="px-1 py-2px bg-light-green text-green border-radius-4">
                                 EMAIL VERIFICADO
                             </small>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="pl-4">Telefono</TableCell>
                        <TableCell>
                            <div>{therapist?.phone}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="pl-4">Ciudad, Estado/Region</TableCell>
                        <TableCell>
                            <div>{}, {}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="pl-4">Pais</TableCell>
                        <TableCell>
                            <div>{}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="pl-4">Direccion</TableCell>
                        <TableCell>
                            <div>{therapist?.address || "Sin direccion"}</div>
                        </TableCell>
                    </TableRow> 
                    <TableRow>
                        <TableCell className="pl-4">Direccion de consultorio</TableCell>
                        <TableCell>
                            <div>{therapist?.cons_add || "Sin direccion"}</div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

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
        </Card>
    )
   
   
   
}

const customerInfo = [
    {
        title: 'País',
        value: 'México',
    },
    {
        title: 'Estado/Región',
        value: 'Michoacán',
    },
    {
        title: 'Dirección',
        value: 'Dirección que provee el terapeuta',
    },
    {
        title: 'Consultorio',
        value: 'Dirección del consultorio',
    },
]

export default TherapistInfoUser;
