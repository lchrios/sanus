import React, { useState, useEffect } from 'react'
import { Icon, IconButton, Hidden, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import {
    MatxSidenavContainer,
    MatxSidenav,
    MatxSidenavContent,
} from 'app/components'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import UserProfileContent from './patientElements/home/user-profile/UserProfileContent'
import UserProfileSidenav from './patientElements/home/user-profile/UserProfileSidenav'
import { getTherapist, getSessions } from 'app/services/functions/UserService'
import useAuth from 'app/hooks/useAuth'
import api from 'app/services/api'

const usestyles = makeStyles(({ palette, ...theme }) => ({
    headerBG: {
        height: 345,
        '@media only screen and (max-width: 959px)': {
            height: 400,
        },
    },
}))

const PatientProfile = () => {
    const [open, setOpen] = useState(true)
    const { user } = useAuth()
    const theme = useTheme()
    const classes = usestyles()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const [therapist, setTherapist] = useState() 
    const [sessions, setSessions] = useState()
    const [payed, setPayed] = useState()
    const [tid, setTid] = useState();
    const [loading, setLoading] = useState(true)  
    

    const toggleSidenav = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (isMobile) setOpen(false)
        else setOpen(true)
    }, [isMobile])

    // useEffect(() => {
    //     if(loading) {
    //         getInfo()
    //     }
    // }, [])

    // const getInfo = () => {

    //     api.get('/u/' + user.uid + '/t')
    //     .then(res => {
    //         setTherapist(res.data)
    //     })
    //     .catch((e) => {
    //         console.error(e);
    //     })
    
    //     api.get('/u/' + user.uid + '/s')
    //     .then(res => {
    //         setSessions(res.data)
    //         setLoading(false)
    //     })
    //     .catch((e) => {
    //         console.error(e)
    //     })
    // }

    useEffect(() => {
        console.log("Pidiendo Terapeuta")
        getTherapist(user.uid).then( res => {
            setTherapist(res?.data);
            setTid(res?.id);
            console.log("Pidiendo Sesiones")
            getSessions(user.uid).then( resp => {
                setSessions(resp?.data);  
                console.log("Revisando si debes alguna sesion o-[:D]=<-<")
                api.get(`/u/${user.uid}/payed`)
                .then(respo => {
                    setPayed(respo.data.payed)
                    console.log(respo.data.payed)
                    setLoading(false);
                })
                .catch( er => {
                    console.error(er);
                })
            })
            .catch( er => {
                console.error(er);
            })
        })
        .catch( er => {
            console.error(er);
        })
    }, [user.uid])
    

    return (
        <div className="relative ">
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
                                <Icon className="text-white mt-2">clear</Icon>
                            </IconButton>
                        </Hidden>
                    </div>
                    <UserProfileSidenav therapist={therapist} loading={loading} />
                </MatxSidenav>
                    <MatxSidenavContent >
                        <div className={clsx('bg-primary', classes.headerBG)} />
                        <UserProfileContent toggleSidenav={toggleSidenav} sessions={sessions} loading={loading} payed={payed} therapist={therapist} tid={tid}/>
                    </MatxSidenavContent>
            </MatxSidenavContainer>
            
        </div>
    )
}

export default PatientProfile
