import React from 'react'
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

const TherapistInfoUser = () => {
    return (
        <Card className="pt-6">
            <div className="flex-column items-center mb-6">
                <Avatar
                    className="w-84 h-84"
                    src="/assets/images/faces/10.jpg"
                />
                <h5 className="mt-4 mb-2">Ben Peterson</h5>
                <small className="text-muted">CEO, Brack Ltd.</small>
            </div>

            <Divider />
            <Table className="mb-4">
                <TableBody>
                    <TableRow>
                        <TableCell className="pl-4">Email</TableCell>
                        <TableCell>
                            <div>ui-lib@example.com</div>
                            <small className="px-1 py-2px bg-light-green text-green border-radius-4">
                                EMAIL VERIFIED
                            </small>
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

                <Button className="mb-4" variant="text">
                    <Icon className="mr-2" fontSize="small">
                        comment
                    </Icon>{' '}
                    Enviar mensaje directo
                </Button>
            </div>
        </Card>
    )
}

const customerInfo = [
    {
        title: 'Teléfono',
        value: '15615665165',
    },
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
