import React, { Component, Fragment } from "react";
import { Breadcrumb, MatxSearchBox } from "app/components/index";
import { Card, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles"
import TherapistTableCards from "./patientElements/TherapistTableCard";

/**como le haremos para que cuando el usuario busque un terapeuta le muestre el que necesita */
/**En el botón de detalles, no se como desplegar la tarjeta del terapeuta, porque para empezar 
 no sé de donde importarla (ejemplo del matx-ui demo "view customer")*/
class PatientBrowse extends Component {
    state = {};
    render() {
        let { theme } = this.props; 
        return (
            <Fragment>
                <div className="m-sm-30">
                    <div className="mb-sm-30">
                        <Breadcrumb routeSegments={[{ name: "Descubre a nuestros especialistas" }]} />
                    </div>
                    <div className="pb-86 pt-30 px-30 bg-primary">
                        <Card></Card>
                    </div>
                    <div>
                        <h1>Encuentra a tu terapeuta favorito</h1>
                    </div>
                    <MatxSearchBox/>
                    <TherapistTableCards/>
                </div>
            </Fragment>
            
        )
    }
}

export default withStyles({}, { withTheme: true })(PatientBrowse);