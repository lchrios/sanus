import React, { useState, useEffect } from 'react'
import { CircularProgress, Grow, Icon, IconButton, TextField, Tooltip, Grid } from '@material-ui/core'
import MUIDataTable from 'mui-datatables'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useAuth from 'app/hooks/useAuth'
import api from 'app/services/api'

const SessionsHistory = ({toggleSidenav}) => {

    const [orderList, setOrderList] = useState(order)
    const [idList, setIdList] = useState();
    const [loading, setLoading] = useState(true)
    var { user } = useAuth()


    useEffect(() => {
        api.get('/u/'+user.uid+'/s')
            .then(res => {
                setOrderList(res.data.data)
                console.log(res.data.id)
                setIdList(res.data.id)
                setLoading(false)
            })    
    }, [])
    

    const columns = [
        {
            name: '_id',
            label: 'ID de la Sesión',
            options: {
                customBodyRenderLite: (dataIndex) => (
                    <span className="ellipsis">{idList[dataIndex]}</span>
                ),
            },
        },
            {
                name: 'customerName',
            label: 'Terapeuta',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => (
                    <span className="ellipsis">
                        {orderList[dataIndex].thername}
                    </span>
                ),
            },
        },
        {
            name: 'productName',
            label: 'Tipo de sesión',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => (
                    <span className="ellipsis">
                        {orderList[dataIndex].tipo}
                    </span>
                ),
            },
        },
        {
            name: 'date',
            label: 'Fecha',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => (
                    <span className="ellipsis">
                        {orderList[dataIndex].start}
                    </span>
                ),
            },
        },
        {
            name: 'status',
            label: 'Estado de la sesión',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {
                    let status = orderList[dataIndex].state

                    switch (status) {
                        case 1:
                            return (
                                <small className="capitalize text-white bg-green border-radius-4 px-2 py-2px">
                                    {status}
                                </small>
                            )
                        case 0:
                            return (
                                <small className="capitalize bg-secondary border-radius-4 px-2 py-2px">
                                    {status}
                                </small>
                            )
                        case -1:
                            return (
                                <small className="capitalize text-white bg-error border-radius-4 px-2 py-2px">
                                    {status}
                                </small>
                            )

                        default:
                            break
                    }
                },
            },
        },
        {
            name: 'method',
            label: 'Método de pago',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => (
                    <span className="">
                        {orderList[dataIndex].pay_met}
                    </span>
                ),
            },
        },
        {
            name: 'total',
            label: 'Costo de la sesión',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => (
                    <span>${orderList[dataIndex].cost}</span>
                ),
            },
        },
        {
            name: 'action',
            label: ' ',
            options: {
                filter: false,
                customBodyRenderLite: (dataIndex) => (
                    <div className="flex items-center">
                        <div className="flex-grow"></div>
                        <Tooltip title="Dudas y aclaraciones">
                            <IconButton>
                                <Icon color="error" fontSize="small">
                                    priority_high
                                </Icon>
                            </IconButton>
                        </Tooltip>
                        {/*<Link to={`/invoice/${orderList[dataIndex].id}`}>
                            <Tooltip title="View Order">
                                <IconButton>
                                    <Icon fontSize="small">
                                        arrow_right_alt
                                    </Icon>
                                </IconButton>
                            </Tooltip>
                        </Link>*/}
                    </div>
                ),
            },
        },
    ]

    return (
        <div className="m-sm-30">
            
            { loading ? 
            <Grid container direction="column" alignItems="center"><Grid item><CircularProgress color="secondary" /></Grid></Grid> 
            :
            <div className="overflow-auto">
                <div className="hide-on-pc flex justify-end menu-button"> 
                {/* // TODO: Arreglar el boton del menu no se activa si esta en vista de pantalla grande  */}
                        <IconButton onClick={toggleSidenav}>
                            <Icon className="">menu</Icon>
                        </IconButton>
                </div>
                <div className="min-w-300">
                    <MUIDataTable
                        title={'Mis sesiones'}
                        data={orderList}
                        columns={columns}
                        options={{
                            filterType: 'textField',
                            responsive: 'vertical',
                            selectableRows: "none",
                            filter: false,
                            download: false,
                            print: false,
                            viewColumns:false,
                            elevation: 0,
                            pagination:false,
                            rowsPerPageOptions: [10, 20, 40, 80, 100],
                            onRowsDelete: (data) => console.log(data),
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
                                                        fontSize="small"
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
            }
        </div>
    )
}

const order = [
    {
        _id: 'lkfjdfjdsjdslgkfjdskjfds',
        date: new Date(),
        customerName: 'Ben Schieldman',
        productName: 'Bit Bass Headphone',
        method: 'PayPal',
        total: 15.25,
        status: 'tomada',
    },
    {
        _id: 'fkjjirewoigkjdhvkcxyhuig',
        date: new Date(),
        customerName: 'Joyce Watson',
        productName: 'Comlion Watch',
        method: 'Tarjeta de crédito',
        total: 75.25,
        status: 'perdida',
    },
    {
        _id: 'fdskjkljicuviosduisjd',
        date: new Date(),
        customerName: 'Kayle Brown',
        productName: 'Beats Headphone',
        method: 'Depósito',
        total: 45.25,
        status: 'pendiente',
    },
    {
        _id: 'fdskfjdsuoiucrwevbgd',
        date: new Date(),
        customerName: 'Ven Helsing',
        productName: 'BMW Bumper',
        method: 'Depósito',
        total: 2145.25,
        status: 'tomada',
    },
]
export default SessionsHistory;
