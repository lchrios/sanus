import React, { Component, Fragment } from "react";
import { Breadcrumb, SimpleCard } from "app/components/index";
import { Card, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PatientHistory from './patientElements/PatientHistory'
import UserPlanCard from "./patientElements/UserPlanCard";

/**Como le puedo añadir una función para que dependiendo de el plan que tenga, muestre el plan que tiene y además cambie el texto del 
 botón y por lo tanto la ruta
 */
class PatientSessions extends Component {
    state = {};
    render() {
        let { theme } = this.props; 
        return (
            <Fragment>
                <div className="m-sm-30">
                    <div className="mb-sm-30">
                        <Breadcrumb routeSegments={[{ name: "Mi historial de sesiones" }]} />
                    </div>
                    <div className="pb-86 pt-30 px-30 bg-primary">
                        <Card></Card>
                    </div>
                    <SimpleCard title="Historial de sesiones">
                        <PatientHistory/>
                    </SimpleCard>
                        
                </div>
                <div>
                    <UserPlanCard/>
                </div>
            </Fragment>
            
        )
    }
}

export default withStyles({}, { withTheme: true })(PatientSessions);