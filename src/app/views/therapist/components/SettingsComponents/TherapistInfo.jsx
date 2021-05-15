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
import { IconButton } from '@material-ui/core'
import { TableHead } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useState } from 'react'
import useAuth from 'app/hooks/useAuth'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& thead': {
            '& th:first-child': {
                paddingLeft: 16,
            },
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))

const TherapistInfo = () => {
    const user = useAuth()
    const [edit, setEdit] = useState(false)
    let state = useState({
            email:'',
            phone:'',
            zoom:'',
            cédula:'',
            adress:''

            
    });

    function handleEdit() {
        setEdit(true)
    }

    const classes = useStyles()
    return (
        <Card className="pt-6" elevation={3}>
            <div className="flex-column items-center mb-6">
                <Avatar
                    className="w-84 h-84"
                    src="/assets/images/faces/10.jpg"
                />
                <h5 className="mt-4 mb-2">Ben Peterson</h5>
                <small className="text-muted">CEO, Brack Ltd.</small>
            </div>

            <Divider />
            <Table 
                className={clsx(
                    'whitespace-pre min-w-750',
                    classes.productTable
                )}
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Título</TableCell>
                        <TableCell>Información</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell>Borrar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className="pl-4">Email</TableCell>
                        <TableCell>
                            <div>ui-lib@example.com</div>
                            <small className="px-1 py-2px bg-light-green text-green border-radius-4">
                                EMAIL VERIFIED
                            </small>
                        </TableCell>
                        {edit ? <form><TextField></TextField></form> : null}
                        <TableCell>
                            <IconButton onClick={handleEdit}>
                                <Icon>edit</Icon>
                            </IconButton>
                        </TableCell>
                        <TableCell>
                            <IconButton>
                                <Icon>delete</Icon>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    {customerInfo.map((item, ind) => (
                        <TableRow key={ind}>
                            <TableCell className="pl-4">{item.title}</TableCell>
                            <TableCell>{item.value}</TableCell>
                            <TableCell>
                                <IconButton>
                                    <Icon>edit</Icon>
                                </IconButton>
                            </TableCell>
                            <TableCell>
                                <IconButton>
                                    <Icon>delete</Icon>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* <div className="flex-column items-start px-4">
                <Button className="mb-1" variant="text">
                    <Icon className="mr-2" fontSize="small">
                        lock_open
                    </Icon>{' '}
                    Reset & Send Password
                </Button>
            </div> */}
        </Card>
    )
}

const customerInfo = [
    {
        title: 'Teléfono',
        value: '+1 439 327 546',
    },
    {
        title: 'Dirección',
        value: 'USA',
    },
    {
        title: 'Cédula profesional',
        value: 'Street Tailwood, No. 17',
    },
    {
        title: 'Zoom URL',
        value: 'https://zoom.us/j/8510547499?pwd=SDdRaktUMnVRenJzTWUyVE9LZ004dz09',
    },
]

export default TherapistInfo
