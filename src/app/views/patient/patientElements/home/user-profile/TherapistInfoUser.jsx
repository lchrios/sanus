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
import firebase from 'firebase'
import man from 'assets/images/avatars/001-man.svg'
import { componentDidMount } from 'react-google-maps/lib/utils/MapChildHelper'
import useAuth from 'app/hooks/useAuth'
import firebaseService from 'app/services/firebase/firebaseService'


const TherapistInfoUser = () => {
    const { user } = useAuth()
    const [therapist, setTherapist] = useState()    

    useEffect(() => {
        //console.log(firebaseService.getTherapistByPatient(user.uid))
        //setTherapist(firebaseService.getTherapistByPatient(user.uid))
        firebase.firestore().collection("patients").doc(user.uid)
            .get()
            .then(doc => {
                const data = doc.data()
                if (data.therapist !== null && data.therapist !== "") {
                    firebase.firestore().collection('therapists').doc(data.therapist)
                    .get()
                    .then(doc => {
                        console.log("Carta terapeuta cargada :D")
                        const ther_data = doc.data()
                        setTherapist(ther_data)
                    })
                }
            })
    }, [user.uid])   
    
    if ( therapist == null) {

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
                    <Button
                     onClick={() => history.push('/'+ user.uid+'/browse') }
                    variant="contained"
                    color="primary"
                    className="x-center"
                    >

                        Seleccionar terapeuta
                    </Button>
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
                            <div>{therapist?.location[0]}, {therapist?.location[1]}</div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="pl-4">Pais</TableCell>
                        <TableCell>
                            <div>{therapist?.location[2]}</div>
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
