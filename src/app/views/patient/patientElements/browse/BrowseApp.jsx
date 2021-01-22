import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios'
import MUIDataTable from 'mui-datatables'
import { Avatar, Grow, Icon, IconButton, TextField, Button } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import history from '../../../../../history'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import useAuth from 'app/hooks/useAuth'
import firebaseService from 'app/services/firebase/firebaseService'
import { truncate } from 'lodash'

//const db = firebase.app().firestore()



const BrowseApp = () => {
    const [isAlive, setIsAlive] = useState(true)
    const [userList, setUserList] = useState([])
    const [docRefs, setDocRefs] = useState([])
    const { user } = useAuth()

   


    useEffect(() => {
       /* Axios.get('/api/user/all').then(({ data }) => {
            if (isAlive) 
            console.log(data)
        })*/ 
        let db = firebaseService.firestore
        var data = []
        var data_ref = []

        const therapists_data = firebaseService.getAllTherapists()

        
        setUserList(therapists_data[0])
        setDocRefs(therapists_data[1])


        /*db.collection("therapists")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    data.push(doc.data())
                    data_ref.push(doc.ref)
                })
                console.log("Terapeutas cargados :D")
                setUserList(data)
                setDocRefs(data_ref)
            })*/
            
        
        return () => setIsAlive(false)
    }, [isAlive])
    
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
                    let therapist = userList[dataIndex]

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
                    let therapist = userList[dataIndex]

                    return (
                        <span className="ellipsis">{therapist?.exp}</span>
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
                    let therapist = userList[dataIndex]

                    return (
                        <span className="ellipsis">{therapist?.cedula}</span>
                    )
                }
            },
        },
        {
            name: 'phone',
            label: 'Telefono',
            options: {
                filter: true,
                customBodyRenderLite: (dataIndex) => {
                    let therapist = userList[dataIndex]

                    return (
                        <span className="ellipsis">{therapist?.phone}</span>
                    )
                }
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
                        <Link to={"/"+user.uid+"/home"} >
                            
                            <IconButton onClick={() => {
                                let therapist_ref = docRefs[dataIndex]
                                const db = firebase.app().firestore()

                                db.collection("patients").doc(user.uid)
                                    .update({
                                        therapist: therapist_ref.id
                                    })
                                    .then(function() {
                                        console.log("Document successfully updated!")
                                    })
                                }}>
                                <Icon>control_point</Icon>
                            </IconButton>
                        </Link>
                    </div>
                ),
            },
        },
    ]

    return (
    <div>
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
    </div>
    )
}

export default BrowseApp
