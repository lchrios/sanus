import React, { Component, Fragment } from "react";
import 'react-calendar/dist/Calendar.css';
import { Card, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
//Test
import PatientProfile from "./patientElements/home/user-profile/PatientProfile";
class PatientHome extends Component {
    state = {};
    render() {
        let { theme } = this.props; 
        return (
        <Fragment>
            <div className="pb-86 px-30 bg-primary" display="flex">
                <Card>
                    <PatientProfile />
                </Card>
            </div>
        </Fragment>
            
        )
    }
}

export default withStyles({}, { withTheme: true })(PatientHome);