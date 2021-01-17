import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import Card from "./card";
import CardBody from "./cardBody";
import CardHeader from "./cardHeader";
import session1 from "assets/images/psychologists/session1.jpg";
import InterestedSectionStyle from "../landingBlogStyles/lessImpBlogStyles";

const useStyles = makeStyles(InterestedSectionStyle);

export default function InterestedSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h3 className={classes.title + " " + classes.textCenter}>
        También te podría interesar
      </h3>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader image plain>
              <a href="#pablo">
                <img src={session1} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + session1 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              
                <h6>DEPRESIÓN</h6>
              
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                Título del artículo
                </a>
              </h4>
              <p className={classes.description}>
                Parrafo del blog, en el cual solo se mostraran algunas de las
                palabras de la introducción del artículo completo, por lo que es 
                importante ser conciso.
                <a href="#pablo"> Leer artículo </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src={session1} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + session1 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              
                <h6>ANSIEDAD</h6>
              
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                Título del artículo
                </a>
              </h4>
              <p className={classes.description}>
                Parrafo del blog, en el cual solo se mostraran algunas de las
                palabras de la introducción del artículo completo, por lo que es 
                importante ser conciso.
                <a href="#pablo"> Leer artículo </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src={session1} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + session1 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              
                <h6>
                  <TrendingUp /> ANSIEDAD
                </h6>
              
              <h4 className={classes.cardTitle}>
                <a href="#pablo">
                Título del artículo
                </a>
              </h4>
              <p className={classes.description}>
                Parrafo del blog, en el cual solo se mostraran algunas de las
                palabras de la introducción del artículo completo, por lo que es 
                importante ser conciso.
                <a href="#pablo"> Leer artículo </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
