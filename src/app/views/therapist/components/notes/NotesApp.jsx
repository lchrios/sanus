// import React, { useState, useEffect} from 'react'
import SideBarComponent from './sidebar/SideBarComponent'
import api from 'app/services/api'
import TextForm from '../notes/editor/TextForm'
// import ListComponent from './listItem/ListComponent'
import React, { useState, useEffect } from "react";
import { Icon, IconButton,Button, Hidden, useMediaQuery, Card, Grid } from "@material-ui/core";
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
import { Loading } from 'app/components/Loading/Loading';


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

    const [loading, setLoading] = useState(true)

    const { user } = useAuth();
    /**
     * *Se repite un chingo
     */
    useEffect(() => {
        api.get(`/t/${user.uid}/n`)
            .then(res => {
                setState({...state,notes: res.data.data})
                setLoading(false);   
              })
            .catch(error => {
                console.error(error)
            })
        },[])

        return (
            <div className="relative">
                {
                    loading ? <Loading/> :  
                    <>{
                    state.notes ?
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
                                <div>
                                    <h1 className='text-white'>Aplicación de notas</h1>
                                    <Button color="secondary" variant="contained"> Volver al escritorio </Button>
                                </div>
                                </div>
                                <SideBarComponent 
                                selectedNoteIndex={state.selectedNoteIndex}
                                notes={state.notes}/>
                            </MatxSidenav>
                            <MatxSidenavContent>
                                <div className={clsx('bg-primary', classes.headerBG)} />
                                <TextForm />
                            </MatxSidenavContent>
                        </MatxSidenavContainer>
                    : 
                    <div>No logramos obtener las notas de la base de datos</div>
                    }
                </>
                }
            </div>
        )

    }
    
    export default withStyles({}, { withTheme: true })(NotesApp);
    