import React, { Component } from "react";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Tooltip,
} from "@material-ui/core";

const PatientStatCards = ({theme}) => {
  return (
    <Grid container spacing={3} className="mb-24">
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex flex-middle">
            <Icon
              style={{
                fontSize: "44px",
                opacity: 0.6,
                color: theme
              }}
            >
              group
            </Icon>
            <div className="ml-12">
              <small className="text-muted">Sesión del día</small>
              <h6 className="m-0 mt-4 text-primary font-weight-500">Horario</h6>
            </div>
          </div>
          <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex flex-middle">
            <Icon
              style={{
                fontSize: "44px",
                opacity: 0.6,
                color: theme
              }}
            >
              attach_money
            </Icon>
            <div className="ml-12">
              <small className="text-muted">Sesión de mañana</small>
              <h6 className="m-0 mt-4 text-primary font-weight-500">Horario</h6>
            </div>
          </div>
          <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className="play-card p-sm-24 bg-paper" elevation={6}>
          <div className="flex flex-middle">
            <Icon
              style={{
                fontSize: "44px",
                opacity: 0.6,
                color: theme
              }}
            >
              store
            </Icon>
            <div className="ml-12">
              <small className="text-muted">Sesión de pasado mañana</small>
              <h6 className="m-0 mt-4 text-primary font-weight-500">
                Horario
              </h6>
            </div>
          </div>
          <Tooltip title="View Details" placement="top">
            <IconButton>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </Tooltip>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
      </Grid>
    </Grid>
  );
};

export default PatientStatCards;