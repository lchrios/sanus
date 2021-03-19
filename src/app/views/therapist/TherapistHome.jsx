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
import TherapistHomeContent from './components/home/TherapistHomeContent'
import TherapistHomeSidenav from './components/home/TherapistHomeSidenav'
import useAuth from "app/hooks/useAuth";
import api from "app/services/api";


const usestyles = makeStyles(({ palette, ...theme }) => ({
    headerBG: {
        height: 345,
        '@media only screen and (max-width: 959px)': {
            height: 400,
        },
    },
}))

const TherapistHome = () => {
    
    const [open, setOpen] = useState(true)

    const { user } = useAuth();
    const theme = useTheme()
    const classes = usestyles()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const [loading, setLoading] = useState(true)
    const [sessions, setSessions] = useState()
    const [users, setUsers] = useState()
    const [blogs, setBlogs] = useState()

    const toggleSidenav = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (isMobile) setOpen(false)
        else setOpen(true)
    }, [isMobile])

    useEffect(() => {
        api.get(`/t/${user.uid}/u`) 
            .then(resU => {
                console.log("Usuarios obtenidos")
                setUsers(resU.data)
                api.get(`/t/${user.uid}/s`) 
                .then(resS => {
                    console.log("Sesiones obtenidas")
                    setSessions(resS.data)
                    api.get(`/t/${user.uid}/b`) 
                    .then(resB => {
                        console.log("Blogs obtenidos")
                        setBlogs(resB.data)            
                        setLoading(false)
                    })
                    
                })
            })
    }, [])

    return (
        <div className="relative">
            <MatxSidenavContainer>
                <MatxSidenav
                    width="300px"
                    open={open}
                    toggleSidenav={toggleSidenav}
                >
                    <div
                        className={clsx(
                            'bg-primary text-right',
                            classes.headerBG
                        )}
                    >
                        <Hidden smUp>
                            <IconButton onClick={toggleSidenav}>
                                <Icon className="text-white">clear</Icon>
                            </IconButton>
                        </Hidden>
                    </div>
                    <TherapistHomeSidenav />
                </MatxSidenav>
                <MatxSidenavContent open={open}>
                    <div className={clsx('bg-primary', classes.headerBG)} />
                    <TherapistHomeContent toggleSidenav={toggleSidenav}  loading={loading} users={users} blogs={blogs} sessions={sessions} />
                </MatxSidenavContent>
            </MatxSidenavContainer>
        </div>
    )
}

export default withStyles({}, { withTheme: true })(TherapistHome);