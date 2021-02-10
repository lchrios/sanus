import React, { Component, Fragment, useState, useEffect } from "react";
import {Button, Icon, IconButton,  useMediaQuery, Hidden  } from "@material-ui/core";
import { withStyles, useTheme } from "@material-ui/styles"
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
    MatxSidenavContainer,
    MatxSidenav,
    MatxSidenavContent,
} from 'app/components'
import BrowseApp from './patientElements/browse/BrowseApp';
import UserProfileSidenav from '../patient/patientElements/home/user-profile/UserProfileSidenav'
import useAuth from 'app/hooks/useAuth'
import history from '../../../history'


const useStyles = makeStyles(({ palette, ...theme }) => ({
    headerBG: {
        height: 345,
        '@media only screen and (max-width: 959px)': {
            height: 0,
        },
    },
}))

const PatientBrowse = ({}) => {
    const [open, setOpen] = useState(true)

    const { user } = useAuth()

    const theme = useTheme()
    const classes  = useStyles()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const toggleSidenav = () => {
        setOpen(!open)
    }

    useEffect(() => {
        if (isMobile) setOpen(false)
        else setOpen(false)
    }, [isMobile])


    if (isMobile)
    return(
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
                    <UserProfileSidenav />
                </MatxSidenav>
                    <MatxSidenavContent >
                        <div className={clsx('bg-primary', classes.headerBG)} />
                        <BrowseApp toggleSidenav={toggleSidenav} />

                        
                    </MatxSidenavContent>
            </MatxSidenavContainer>
            
        </div>

        
        
    )

    else {
        return (
            <Fragment>
                 <div className="m-sm-30">
                     <div className="mb-sm-30">
                    
                     </div>
                     <div>
                        <Button 
                        className="x-center" 
                        color="secondary" 
                        variant="contained"
                        onClick={() => history.push('/' + user.uid + '/home')}
                        >
                            Volver al escritorio
                        </Button>
                     </div>
                     <div>
                         <h1>Encuentra a tu terapeuta favorito</h1>
                     </div>
                     <BrowseApp/>
                 </div>
             </Fragment>
        )

    }
}
// class PatientBrowse extends Component {
//     state = {};
//     render() {
//         let { theme } = this.props; 
         
//         return (
//             <Fragment>
//                 <div className="m-sm-30">
//                     <div className="mb-sm-30">
                    
//                     </div>
//                     <div className="pb-86 pt-30 px-30 bg-primary">
                        
//                         <Card></Card>
//                     </div>
//                     <div>
//                         <h1>Encuentra a tu terapeuta favorito</h1>
//                     </div>
//                     <BrowseApp/>
//                 </div>
//             </Fragment>
            
//         )
//     }
// }

export default withStyles({}, { withTheme: true })(PatientBrowse);