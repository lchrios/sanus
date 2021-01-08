import React, { Component, Fragment } from "react";
import PatientFeelingsTest from './patientElements/PatientFeelingsTest'
import {SimpleCard} from 'app/components/index'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Card, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PatientHabitsTest from "./patientElements/PatientHabitsTest"

//Botones
import { Icon, Fab } from "@material-ui/core";
import classes from './patientElements/PatientButtons';
/**en las sesiones próximas de usuario, ¿cómo haremos para que el usuario pueda conectarse desde ahí a la sesión?, y que esté
 actualizandose constantemente**/
class PatientHome extends Component {
    state = {};
    render() {
        let { theme } = this.props; 
        return (
        <Fragment>
            <div className="pb-86 pt-30 px-30 bg-primary" display="flex">
                <Card>
                    <SimpleCard title="Veamos como estás hoy">

                        <div className="flex-column">
                            <SimpleCard>
                                <PatientFeelingsTest />
                                <Fab variant="extended" aria-label="Delete" className={classes.button}>
                                     <Icon className="mr-8">navigation</Icon>
                                        Extended
                                </Fab>
                            </SimpleCard>
                        
                            <SimpleCard title='Comportamiento'>
                                <PatientHabitsTest />
                            </SimpleCard>

                            <SimpleCard title='Agenda tu próxima cita'>
                                <Calendar />
                            </SimpleCard>
                        </div>
                    </SimpleCard>
                    
                </Card>
            </div>
        </Fragment>
            
        )
    }
}

export default withStyles({}, { withTheme: true })(PatientHome);