import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import Card from "./card";
import CardBody from "./cardBody";
import Button from "./button";
import session1 from "assets/images/psychologists/session1.jpg";
import blogCardsStyle from "../landingBlogStyles/blogCardsStyle";

const useStyles = makeStyles(blogCardsStyle);

export default function BlogCards() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          <h1 className={classes.titleB}>últimas entradas de blog</h1>
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + session1 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>DEPRESIÓN</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  Título del artículo
                </h3>
              </a>
              <p className={classes.category}>
                Parrafo del blog, en el cual solo se mostraran algunas de las
                palabras de la introducción del artículo completo, por lo que es 
                importante ser conciso.
              </p>
              <Button round href="#pablo" color="danger">
                <FormatAlignLeft className={classes.icons} /> Leer Artículo
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + session1 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>ANGUSTIA</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                Título del artículo
                </h3>
              </a>
              <p className={classes.category}>
                Parrafo del blog, en el cual solo se mostraran algunas de las
                palabras de la introducción del artículo completo, por lo que es 
                importante ser conciso.
              </p>
              <Button round href="#pablo" color="primary">
                <FormatAlignLeft className={classes.icons} /> Leer artículo
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + session1 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>ANSIEDAD</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                Título del artículo
                </h3>
              </a>
              <p className={classes.category}>
                Parrafo del blog, en el cual solo se mostraran algunas de las
                palabras de la introducción del artículo completo, por lo que es 
                importante ser conciso.
              </p>
              <Button round href="#pablo" color="warning">
                <FormatAlignLeft className={classes.icons} /> Leer artículo
              </Button>
              <Tooltip
                id="tooltip-pocket"
                title="Save to Pocket"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="white" simple justIcon>
                  <i className="fab fa-get-pocket" />
                </Button>
              </Tooltip>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
