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

    const { user } = useAuth;
    const theme = useTheme()
    const classes = usestyles()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const toggleSidenav = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (isMobile) setOpen(false)
        else setOpen(true)
    }, [isMobile])


    //let { theme } = this.props; 
    /*return (
        <Fragment>
            <div className="m-sm-30">
                <div className="pb-86 pt-30 px-30 bg-primary">
                    <Card></Card>
                </div>
                <div className="analytics m-sm-30 mt--72">
                    <Grid container spacing={3}>
                        
                    </Grid>
                </div>
            </div>
        </Fragment>  
    )*/


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
                    <TherapistHomeContent toggleSidenav={toggleSidenav} />
                </MatxSidenavContent>
            </MatxSidenavContainer>
        </div>
    )
}

export default withStyles({}, { withTheme: true })(TherapistHome);