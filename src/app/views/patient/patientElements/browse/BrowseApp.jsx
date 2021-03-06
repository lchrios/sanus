import React, { useState, useEffect} from 'react'
import MUIDataTable from 'mui-datatables'
import { Avatar, Grow, Icon, IconButton, TextField} from '@material-ui/core'
import history from '../../../../../history'
import useAuth from 'app/hooks/useAuth'
import api from 'app/services/api'



const BrowseApp = ({ toggleSidenav }) => {

    const [therapistList, setTherapistList] = useState([])
    const [docRefs, setDocRefs] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        
        api.get('/t').then(res => {
            setTherapistList(res.data.data)
            setDocRefs(res.data.id)
        })

    }, [])
    
    const columns = [
        {
            name: 'name', // field name in the row object
            label: 'Nombre', // column title that will be shown in table
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {
                    let therapist = therapistList[dataIndex]

                    return (
                        <div className="flex items-center">
                            <Avatar className="w-48 h-48" src={therapist?.img} />
                            <div className="ml-3">
                                <h5 className="my-0 text-15">{therapist?.name}</h5>
                                <small className="text-muted">
                                    {therapist?.email}
                                </small>
                            </div>
                        </div>
                    )
                },
            },
        },
        {
            name: 'address',
            label: 'Consultorio',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {
                    let therapist = therapistList[dataIndex]

                    return (
                        <span className="ellipsis">{therapist?.address || "Sin direccion"}</span>
                    )
                },
            },
        },
        {
            name: 'exp',
            label: 'Experiencia',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {
                    let therapist = therapistList[dataIndex]

                    return (
                        <span className="">{therapist?.exp}</span>
                    )
                },
            },
        },
        {
            name: 'ced',
            label: 'Cedula',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {
                    let therapist = therapistList[dataIndex]

                    return (
                        <span className="ellipsis">{therapist?.cedula}</span>
                    )
                }
            },
        },
        /*{
            name: 'phone',
            label: 'Telefono',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {
                    let therapist = therapistList[dataIndex]

                    return (
                        <span className="ellipsis">{therapist?.phone}</span>
                    )
                }
            },
        },*/
        {
            name: 'action',
            label: 'Seleccionar terapeuta ',
            options: {
                filter: false,
                customBodyRenderLite: (dataIndex) => (
                    <div className="flex">
                        <div className=""></div>
                            <IconButton onClick={() => {
                                api.post(`/u/${user.uid}/t/${docRefs[dataIndex]}`)
                                    .then( res => {
                                        console.log('Terapeutas reasignados', res.status);
                                        history.push(`/${user.uid}/changepaymethod`)
                                    })
                                    .catch( error => {
                                        console.error(error);
                                    })
                            }}>
                                    
                                    <Icon>control_point</Icon>

                            </IconButton>
                    </div>
                ),
            },
        },
    ]

    return (
    <div>
        <div className="m-sm-30">
            <div className="overflow-auto">
            <div className="hide-on-pc flex justify-end menu-button">
                        <IconButton onClick={toggleSidenav}>
                            <Icon className="">menu</Icon>
                        </IconButton>
            </div>
                <div className="min-w-300">
                    <MUIDataTable
                        title={'Todos los terapeutas'}
                        data={therapistList}
                        columns={columns}
                        options={{
                            filterType: 'textField',
                            responsive: 'simple',
                            selectableRows: "none", // set checkbox for each row
                            //search: false, // set search option
                            filter: false, // set data filter option
                            download: false, // set download option
                            print: false, // set print option
                            pagination: false, //set pagination option
                            viewColumns: false, // set column option
                            elevation: 0,
                            rowsPerPageOptions: [10, 20, 40, 80, 100],
                            customSearchRender: (
                                searchText,
                                handleSearch,
                                hideSearch,
                                options
                            ) => {
                                return (
                                    <Grow appear in={true} timeout={300}>
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            onChange={({ target: { value } }) =>
                                                handleSearch(value)
                                            }
                                            InputProps={{
                                                style: {
                                                    paddingRight: 0,
                                                },
                                                startAdornment: (
                                                    <Icon
                                                        className="mr-2"
                                                        fontSize="large"
                                                    >
                                                        search
                                                    </Icon>
                                                ),
                                                endAdornment: (
                                                    <IconButton
                                                        onClick={hideSearch}
                                                    >
                                                        <Icon fontSize="small">
                                                            clear
                                                        </Icon>
                                                    </IconButton>
                                                ),
                                            }}
                                        />
                                    </Grow>
                                )
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default BrowseApp
