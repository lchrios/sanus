import React, { useState, useEffect } from 'react'
import { CircularProgress, Grow, Icon, IconButton, TextField, Tooltip, Grid, useMediaQuery } from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'
import MUIDataTable from 'mui-datatables'
import useAuth from 'app/hooks/useAuth'
import api from 'app/services/api'

const SessionsHistory = ({toggleSidenav}) => {

    const theme = useTheme();
    const [orderList, setOrderList] = useState()
    const [idList, setIdList] = useState();
    const [loading, setLoading] = useState(true)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    var { user } = useAuth()


    useEffect(() => {
        api.get('/u/'+user.uid+'/s')
            .then(res => {
                setOrderList(res.data.data)
                setIdList(res.data.id)
                setLoading(false)
            })    
    }, [])
    

    const columns = [
        {
            name: 'status',
            label: 'Estado de la sesión',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {

                    if (!orderList[dataIndex].payed) {
                        return (
                            <small className="capitalize text-white bg-error border-radius-4 px-2 py-2px">
                                No pagada
                            </small>
                        )   
                    }

                    let status = orderList[dataIndex].state

                    switch (status) {
                        case 1:
                            return (
                                <small className="capitalize text-white bg-green border-radius-4 px-2 py-2px">
                                    Completada
                                </small>
                            )
                        case 0:
                            return (
                                <small className="capitalize bg-secondary border-radius-4 px-2 py-2px">
                                    Pendiente
                                </small>
                            )
                        case -1:
                            return (
                                <small className="capitalize text-white bg-error border-radius-4 px-2 py-2px">
                                    Perdida
                                </small>
                            )

                        default:
                            return (
                                <small className="capitalize text-white bg-error border-radius-4 px-2 py-2px">
                                    Error
                                </small>
                            )
                    }
                },
            },
        },
        // {
        //     name: '_id',
        //     label: 'ID de la Sesión',
        //     options: {
        //         customBodyRenderLite: (dataIndex) => (
        //             <span className="ellipsis">{idList[dataIndex]}</span>
        //         ),
        //     },
        // },
            {
                name: 'customerName',
            label: 'Terapeuta',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => (
                    <span className="ellipsis">
                        {orderList[dataIndex].ther_name}
                    </span>
                ),
            },
        },
        {
            name: 'date',
            label: 'Fecha',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {
                    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    return (<span className="ellipsis">
                        {new Date(orderList[dataIndex].start).toLocaleDateString("es-ES", options)}
                    </span>)
                },
            },
        },
        {
            name: 'tipo_pago',
            label: 'Pagado con',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => (
                    <img
                        className="overflow-hidden"
                        style={{
                            width: "50px",
                        }}
                        src={orderList[dataIndex].pay_type === 'card' ? '/assets/images/payment-methods/visa.png' : '/assets/images/payment-methods/oxxo.png' }
                        alt="master card"
                    />
                ),
            },
        },
        // {
        //     name: 'method',
        //     label: 'Método de pago',
        //     options: {
        //         filter: true,
        //         customBodyRenderLite: (dataIndex) => (
        //             <span className="">
        //                 {orderList[dataIndex].pay_type}
        //             </span>
        //         ),
        //     },
        // },
        {
            name: 'total',
            label: 'Costo de la sesión',
            options: {
                filter: true,
                sort: true,
                hint: "El costo de la sesión se muesta en pesos mexicanos (MXN)",
                customBodyRenderLite: (dataIndex) => (
                    <span className="full-width">${orderList[dataIndex].cost/100}</span>
                ),
            },
        },
        {
            name: 'action',
            label: 'Ayuda',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => (
                    <div className="">
                        <div className="flex-grow"></div>
                        <Tooltip title="Dudas y aclaraciones">
                            <IconButton>
                                <Icon color="error" fontSize="small">
                                    priority_high
                                </Icon>
                            </IconButton>
                        </Tooltip>
                        {/* <Link to={`/invoice/${orderList[dataIndex].id}`}>
                            <Tooltip title="View Order">
                                <IconButton>
                                    <Icon fontSize="small">
                                        arrow_right_alt
                                    </Icon>
                                </IconButton>
                            </Tooltip>
                        </Link> */}
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
                <div className="flex justify-end menu-button"> 
                {/* // TODO: Arreglar el boton del menu no se activa si esta en vista de pantalla grande  */}
                        <IconButton onClick={toggleSidenav}>
                            <Icon className={isMobile ? '' : 'hidden'}>menu</Icon>
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
                            filter: true,
                            download: false,
                            print: false,
                            viewColumns: true,
                            elevation: 3,
                            pagination: true,
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

export default SessionsHistory;
