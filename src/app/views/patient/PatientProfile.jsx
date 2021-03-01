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
import { getTherapist } from 'app/services/functions/UserService'
import useAuth from 'app/hooks/useAuth'

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
    const [loading, setLoading] = useState(true)   

    const toggleSidenav = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (isMobile) setOpen(false)
        else setOpen(true)
    }, [isMobile])

    useEffect(() => {
        getTherapist(user.uid).then( data => {
            setTherapist(data?.data);
            setLoading(false);
        })
    }, [])

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
                    <UserProfileSidenav ther_data={therapist} />
                </MatxSidenav>
                    <MatxSidenavContent >
                        <div className={clsx('bg-primary', classes.headerBG)} />
                        <UserProfileContent toggleSidenav={toggleSidenav} loading={loading} ther_data={therapist} />
                    </MatxSidenavContent>
            </MatxSidenavContainer>
            
        </div>
    )
}

export default PatientProfile
