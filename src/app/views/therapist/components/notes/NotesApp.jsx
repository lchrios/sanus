// import React, { useState, useEffect} from 'react'
import SideBarComponent from './sidebar/SideBarComponent'
import api from 'app/services/api'
import TextForm from '../notes/editor/TextForm'
// import ListComponent from './listItem/ListComponent'
import React, { useState, useEffect } from "react";
import { Icon, IconButton, Hidden, useMediaQuery, Card, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { useTheme } from '@material-ui/core/styles'
import {
    MatxSidenavContainer,
    MatxSidenav,
    MatxSidenavContent,
} from 'app/components'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import useAuth from "app/hooks/useAuth";


const usestyles = makeStyles(({ palette, ...theme }) => ({
    headerBG: {
        height: 100,
        '@media only screen and (max-width: 959px)': {
            height: 400,
        },
    },
}))

const NotesApp = () => {
    const theme = useTheme()
    const classes = usestyles()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const [state, setState] = useState({
        selectedNoteIndex: null,
        selectedNote:null,
        notes: null
    })
    const { user } = useAuth();
    useEffect(() => {
        const getNotes = api.get(`/t/${user.uid}/n`)
            .then(res => {
                setState({notes: res.data.data});   
              })
            .catch(error => {
                console.error(error)
            })
        })

    if (notes) {
        return (
            <div className="relative">
                <MatxSidenavContainer>
                    <MatxSidenav
                        width="300px"
                    >
                        <div
                            className={clsx(
                                'bg-primary text-center',
                                classes.headerBG
                            )}
                        >
                            <Hidden smUp>
                                <IconButton>
                                    <Icon className="text-white">clear</Icon>
                                </IconButton>
                            </Hidden>
                        </div>
                        <SideBarComponent 
                        notes={state.notes}/>
                    </MatxSidenav>
                    <MatxSidenavContent>
                        <div className={clsx('bg-primary', classes.headerBG)} />
                        <TextForm />
                    </MatxSidenavContent>
                </MatxSidenavContainer>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default withStyles({}, { withTheme: true })(NotesApp);

// const NotesApp = () => {
//     const { user } = useAuth();
//     const [state, setState] = useState({
//         selectedNoteIndex: null,
//         selectedNote: null,
//         notes: null
//     })

//     const [addingNote, setAddingNote] = useState(false);
//     const toggleAdding = () => {
//         setAddingNote(true)
//     }


//     return(
//         <div >
//             <SideBarComponent/>
//             <TextForm/>
//         </div>
//     )
// }

// export default NotesApp