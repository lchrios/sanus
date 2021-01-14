import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import MUIDataTable from 'mui-datatables'
import { Avatar, Grow, Icon, IconButton, TextField } from '@material-ui/core'
import history from '../../../../../history'
import { Link } from 'react-router-dom'

const BrowseApp = () => {
    const [isAlive, setIsAlive] = useState(true)
    const [userList, setUserList] = useState([])

    useEffect(() => {
       /* Axios.get('/api/user/all').then(({ data }) => {
            if (isAlive) 
            console.log(data)
        })*/
        setUserList(fakeDbTher)
        return () => setIsAlive(false)
    }, [isAlive])

const fakeDbTher = [
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
    {
        adress:"",
        age:"",
        balance:"",
        bd:"",
        company:"",
        email:"",
        gender:"",
        guid:"",
        id:"",
        imgUrl:"",
        index:0,
        isActive:false,
        name:"Luis",
        phone:""
    },
]
    /**tenemos que cambiar la base de datos para que coincida el nombre que el usuario ve, con el nombre
    que tenemos en base de datos, y no se muestre extraño o se preste a confuciones*/

    
    const columns = [
        {
            name: 'name', // field name in the row object
            label: 'Nombre', // column title that will be shown in table
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {
                    let therapist = userList[dataIndex]

                    return (
                        <div className="flex items-center">
                            <Avatar className="w-48 h-48" src={therapist?.imgUrl} />
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
                // customBodyRenderLite: (dataIndex) => (
                //   <span className="ellipsis">{userList[dataIndex].address}</span>
                // ),
            },
        },
        {
            name: 'company',
            label: 'Experiencia',
            options: {
                filter: true,
            },
        },
        {
            name: 'balance',
            label: 'Precio',
            options: {
                filter: true,
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
                        
                            <IconButton onClick={() => history.push("/:pid/changepaymethod")}>
                                <Icon>control_point</Icon>
                            </IconButton>
                        
                        <Link >
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Link>
                    </div>
                ),
            },
        },
    ]

    return (
        <div className="m-sm-30">
            <div className="overflow-auto">
                <div className="min-w-750">
                    <MUIDataTable
                        title={'Todos los terapeutas'}
                        data={userList}
                        columns={columns}
                        options={{
                            filterType: 'textField',
                            responsive: 'standard',
                            // selectableRows: "none", // set checkbox for each row
                            // search: false, // set search option
                            // filter: false, // set data filter option
                            // download: false, // set download option
                            // print: false, // set print option
                            // pagination: true, //set pagination option
                            // viewColumns: false, // set column option
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
        </div>
    )
}

export default BrowseApp
