import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "../../landingBlog/components/GridContainer";
import GridItem from "../../landingBlog/components/GridItem";
import Card from "../../landingBlog/components/card";
import CardBody from "../../landingBlog/components/cardBody";
import CardHeader from "../../landingBlog/components/cardHeader";
import session1 from "assets/images/psychologists/session1.jpg";
import InterestedSectionStyle from "./blogEntriesStyle";

const useStyles = makeStyles(InterestedSectionStyle);

export default function BlogEntriesCards() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader image plain>
              <a href="/landingblog">
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
                <a href="/landingblog">
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
              <a href="/landingblog">
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
