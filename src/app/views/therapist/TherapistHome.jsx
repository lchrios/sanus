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
    const [charge, setCharge] = useState()
    const theme = useTheme()
    const classes = usestyles()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const [loading, setLoading] = useState(true)
    const [sessions, setSessions] = useState()
    const [users, setUsers] = useState()
    const [blogs, setBlogs] = useState()
    const [therapist, setTherapist] = useState()
    const [url, setUrl] = useState();
    const [counter, setCounter] = useState(5); // * Numero de requests  que se hacen

    const toggleSidenav = () => {
        setOpen(!open)
    }

    const finishReq = () => {
        setCounter(cnt => cnt - 1);
    }

    useEffect(() => {
        if (isMobile) setOpen(false)
        else setOpen(true)
    }, [isMobile])

    useEffect(() => {
        console.log(counter)
        if (counter === 0) {
            setLoading(false);
        }
    }, [counter])

    useEffect(() => {

        api.get(`/t/${user.uid}/u`) 
        .then(resU => {
            console.log("OK: Usuarios obtenidos")
            setUsers(resU.data)
            finishReq()
        })

        api.get(`/t/${user.uid}/s/uncompleted`) 
        .then(resS => {
            console.log("OK: Sesiones obtenidas")
            setSessions(resS.data)
            finishReq();
        })

        api.get(`/t/${user.uid}/b`) 
        .then(resB => {
            console.log("OK: Blogs obtenidos")
            setBlogs(resB.data)
            finishReq()
        })

        api.get(`/t/${user.uid}/image`) 
        .then(resC => {
            console.log("OK: Imagen obtenida")
            setUrl(resC.data.url)
            finishReq()               
        })
        api.get(`/t/${user.uid}/reAuth`)
        .then(res => {
            console.log(res,'TherapistHomereAuth')
            setCharge(res.data.charges_enabled)
            finishReq()
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
                    <TherapistHomeSidenav charge={charge} url={url} therapist={therapist} loading={loading} />
                </MatxSidenav>
                <MatxSidenavContent open={open}>
                    <div className={clsx('bg-primary', classes.headerBG)} />
                    <TherapistHomeContent charge={charge} toggleSidenav={toggleSidenav}  loading={loading} users={users} blogs={blogs} sessions={sessions} />
                </MatxSidenavContent>
            </MatxSidenavContainer>
        </div>
    )
}

export default withStyles({}, { withTheme: true })(TherapistHome);