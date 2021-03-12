// import React, { useState, useEffect} from 'react'
import SideBarComponent from './sidebar/SideBarComponent'
import api from 'app/services/api'
import TextForm from './editor/TextForm'
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
import history from '../../../../../history'


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
                                width="300px py-4"
                                >
                                <div className='mb-10'>
                                    <SideBarComponent 
                                    selectedNoteIndex={state.selectedNoteIndex}
                                    notes={state.notes}/>
                                </div>
                                <div
                                    className={clsx(
                                        'bg-primary text-center',
                                        classes.headerBG
                                        ),'p-4'}
                                        >
                                            <Button 
                                            onClick={() => history.push('/' + user.uid +'/dashboard')}
                                            color="secondary" 
                                            variant="contained"
                                            className='align-middle y-center'>
                                                    <h3 className='align-middle justify-center'>Volver al escritorio</h3>
                                            </Button>
    
                                    <Hidden smUp>
                                        <IconButton>
                                            <Icon className="text-white">clear</Icon>
                                        </IconButton>
                                    </Hidden>
                                </div>
                            </MatxSidenav>
                            <MatxSidenavContent>
                                <div className={clsx('bg-primary', classes.headerBG),'text-center'}>
                                    <h1 className='pb-4 mb-2 mt-2'>Aplicación de notas</h1>
                                </div>
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
    