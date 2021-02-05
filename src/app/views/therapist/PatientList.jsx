import React, { useState, useEffect } from 'react'
import {
    Grid,
    Card,
    Avatar,
    Divider,
    Button,
    Icon,
    TablePagination,
} from '@material-ui/core'
import Axios from 'axios'
import PatientProfileCard1 from './components/PatientProfileCard'

const PatientList = () => {
    const [isAlive, setIsAlive] = useState(true)
    const [userList, setUserList] = useState([])

    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [page, setPage] = useState(0)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    useEffect(() => {
        Axios.get('/api/user/all').then(({ data }) => {
            if (isAlive) setUserList(data)
        })
        return () => setIsAlive(false)
    }, [isAlive])

    return (
        <div className="m-sm-30">
            <Grid container spacing={2}>
                <Grid item md={3} sm={12} xs={12}>
                    <Card className="pb-8">
                        <div className="p-8 flex-column items-center">
                            <h4 className="pb-4">Paciente seleccionado</h4>
                            <Avatar
                                className="h-56 w-56 mb-6"
                                src="/assets/images/face-1.png"
                            />
                            <p className="mt-0 mb-2 text-muted font-normal capitalize">
                                Project manager
                            </p>
                            <h5 className="m-0">Asiya Wolff</h5>
                        </div>
                        <Divider className="mb-8" />
                        <div className="mb-8">
                            <p className="text-muted mt-0 mb-3 ml-3">Acciones</p>
                            <Button
                                variant="text"
                                className="w-full justify-start px-3"
                            >
                                <Icon fontSize="small">content_paste</Icon>
                                <span className="ml-2">Notas de las sesiones</span>
                            </Button>
                            <Button
                                variant="text"
                                className="w-full justify-start px-3"
                            >
                                <Icon fontSize="small">contact_mail</Icon>
                                <span className="ml-2">Información del usuario</span>
                            </Button>
                            <Button
                                variant="text"
                                className="w-full justify-start px-3"
                            >
                                <Icon fontSize="small">person</Icon>
                                <span className="ml-2">Contactar</span>
                            </Button>
                        </div>
                    </Card>
                </Grid>
                <Grid item md={9} sm={12} xs={12}>
                    <Grid container spacing={2}>
                        {userList
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((user, ind) => (
                                <Grid key={user.id} item sm={6} xs={12}>
                                    <PatientProfileCard1 user={user} />
                                </Grid>
                            ))}
                    </Grid>
                    <div className="mt-4">
                        <TablePagination
                            className="px-4"
                            rowsPerPageOptions={[10, 25, 50]}
                            component="div"
                            count={userList.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default PatientList
