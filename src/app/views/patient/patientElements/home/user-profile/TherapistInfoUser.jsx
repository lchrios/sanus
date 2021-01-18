import React, { useState } from 'react'
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
import { componentDidMount } from 'react-google-maps/lib/utils/MapChildHelper'



//const app = firebase.initializeApp(firebaseConfig)
const db = firebase.app().firestore()




const TherapistInfoUser = () => {

    const [therapist, setTherapist] = useState()

    db.collection("patients").doc("1")
        .get()
        .then(doc => {
            const data = doc.data()
            setTherapist(data)
        })

    return (
        <Card className="pt-6">
            <div className="flex-column items-center mb-6">
                <Avatar
                    className="w-84 h-84"
                    src={therapist?.imgSrc}
                />
                <h5 className="mt-4 mb-2">{therapist?.name}</h5>
                <small className="text-muted">{therapist?.phrase}</small>
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
                            <div>{therapist?.telefono}</div>
                        </TableCell>
                    </TableRow>
                    {customerInfo.map((item, ind) => (
                        <TableRow key={ind}>
                            <TableCell className="pl-4">{item.title}</TableCell>
                            <TableCell>{item.value}</TableCell>
                        </TableRow>
                    ))}
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
