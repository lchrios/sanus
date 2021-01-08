import React, { Component } from "react";
import {
  Card,
  Button
} from "@material-ui/core";

const UserPlanCard = () => {
  return (
    <Card className="p-sm-24 mb-24">
      <Card elevation={0} className="upgrade-card bg-light-primary p-sm-24">
        <img src="/assets/images/illustrations/upgrade.svg" alt="upgrade" />
        <p className="text-muted m-0 py-24">
          Tu plan contratado <b>es: pid:plan</b>
        </p>
        <Button
          className="uppercase"
          size="large"
          variant="contained"
          color="primary"
        >
          MEJORAR PLAN
        </Button>
      </Card>
    </Card>
  );
};

export default UserPlanCard;