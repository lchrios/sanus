import React from "react";
import history from './../../../../../history'
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
import terapia from "assets/images/blog/terapia1.jpg";
import terapia2 from "assets/images/blog/terapia3.jpg";
import terapia1 from 'assets/images/blog/terapia2.jpg'
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
            style={{ backgroundImage: "url(" + terapia + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>DUDAS</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                ¿Cómo interpretar lo que me dice mi terapeuta?
                </h3>
              </a>
              <p className={classes.category}>
              Cuando es la primera vez que vamos a terapia, normalmente
                no sabemos que interpretar de la informaciónq nuestro 
                terapeuta nos da, lo importante es...
              </p>
              {/**No existe el blog ID , CREARLO */}
              <Button round onClick={history.push('/blogId')} color="danger">
                <FormatAlignLeft className={classes.icons} /> Leer Artículo
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + terapia1 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>DUDAS</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                ¿Cómo interpretar lo que me dice mi terapeuta?
                </h3>
              </a>
              <p className={classes.category}>
              Cuando es la primera vez que vamos a terapia, normalmente
                no sabemos que interpretar de la informaciónq nuestro 
                terapeuta nos da, lo importante es...
              </p>
              <Button round onClick={history.push('/blogId')} color="danger">
                <FormatAlignLeft className={classes.icons} /> Leer Artículo
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + terapia2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>DUDAS</h6>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                ¿Cómo interpretar lo que me dice mi terapeuta?
                </h3>
              </a>
              <p className={classes.category}>
              Cuando es la primera vez que vamos a terapia, normalmente
                no sabemos que interpretar de la informaciónq nuestro 
                terapeuta nos da, lo importante es...
              </p>
              <Button round onClick={history.push('/blogId')} color="danger">
                <FormatAlignLeft className={classes.icons} /> Leer Artículo
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
