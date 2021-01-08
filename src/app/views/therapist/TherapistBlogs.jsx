import React, { Component, Fragment } from "react";
import { Breadcrumb } from "app/components/index";
import { Card, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

class TherapistBlogs extends Component {
    state = {};
    render() {
        let { theme } = this.props; 
        return (
            <Fragment>
                <div className="m-sm-30">
                    <div className="mb-sm-30">
                        <Breadcrumb routeSegments={[{ name: "My blogs" }]} />
                    </div>
                    <div className="pb-86 pt-30 px-30 bg-primary">
                        <Card></Card>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}

export default withStyles({}, { withTheme: true })(TherapistBlogs);