import React, { Component, Fragment, useState, useEffect} from "react";
import { MatxSidenavContainer,
    MatxSidenav,
    MatxSidenavContent, } from "app/components";
import clsx from 'clsx'
import { Card, Grid, Button, Icon, IconButton,  useMediaQuery, Hidden  } from "@material-ui/core";
import { withStyles, useTheme } from "@material-ui/styles";
import {makeStyles } from '@material-ui/core/styles'
import UserProfileSidenav from '../patient/patientElements/home/user-profile/UserProfileSidenav'
import useAuth from 'app/hooks/useAuth'
import history from '../../../history'

import SessionsHistory from "./patientElements/sessions/SessionsHistory";
import SimpleCard from "app/components/cards/SimpleCard";


const useStyles = makeStyles(({ palette, ...theme }) => ({
    headerBG: {
        height: 345,
        '@media only screen and (max-width: 959px)': {
            height: 0,
        },
    },
}))

const PatientSessions = () => {
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
                    <UserProfileSidenav />
                </MatxSidenav>
                    <MatxSidenavContent>
                        <div className={clsx('bg-primary', classes.headerBG)} />
                        <SessionsHistory toggleSidenav={toggleSidenav} />

                        
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
                         <h1>Tus sesiones</h1>
                     </div>
                     <div>
                         <Card>
                             <SimpleCard>
                                 <SessionsHistory/>
                             </SimpleCard>
                         </Card>
                     </div>
                    
                        
                 </div>
             </Fragment>
        )
    }
}

// class PatientSessions extends Component {
//     state = {};
//     render() {
//         let { theme } = this.props; 
//         return (
//                     <Fragment>
//                  <div className="m-sm-30">
//                      <div className="mb-sm-30">
//                          <Breadcrumb routeSegments={[{ name: "Mi historial de sesiones" }]} />
//                      </div>
//                      <div>
//                          <Card>
//                              <SimpleCard title="Historial de sesiones">
//                                  <SessionsHistory/>
//                              </SimpleCard>
//                          </Card>
//                      </div>
                    
                        
//                  </div>
//              </Fragment>
             
            
//          )
//      }
//  }

export default withStyles({}, { withTheme: true })(PatientSessions);