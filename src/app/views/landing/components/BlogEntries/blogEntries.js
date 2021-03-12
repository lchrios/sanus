import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "../../landingBlog/components/GridContainer";
import GridItem from "../../landingBlog/components/GridItem";
import Card from "../../landingBlog/components/card";
import CardBody from "../../landingBlog/components/cardBody";
import CardHeader from "../../landingBlog/components/cardHeader";
import terapia from "../../../../../assets/images/blog/terapia1.jpg";
import terapia1 from "../../../../../assets/images/blog/terapia2.jpg";
import terapia2 from "../../../../../assets/images/blog/terapia3.jpg";


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
                <img src={terapia} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + terapia + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              
                <h6>DUDAS</h6>
              
              <h4 className={classes.cardTitle}>
                <a href="/landingblog">
                  ¿Cómo interpretar lo que me dice mi terapeuta?
                </a>
              </h4>
              <p className={classes.description}>
                Cuando es la primera vez que vamos a terapia, normalmente
                no sabemos que interpretar de la informaciónq nuestro 
                terapeuta nos da, lo importante es...
                <br />
                <br />
                <a href="#pablo"> Leer artículo </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="/landingblog">
                <img src={terapia1} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + terapia1 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              
              <h6>DUDAS</h6>
              
              <h4 className={classes.cardTitle}>
                <a href="/landingblog">
                  ¿Cómo interpretar lo que me dice mi terapeuta?
                </a>
              </h4>
              <p className={classes.description}>
                Cuando es la primera vez que vamos a terapia, normalmente
                no sabemos que interpretar de la informaciónq nuestro 
                terapeuta nos da, lo importante es...
                <br />
                <br />
                <a href="#pablo"> Leer artículo </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
                <img src={terapia2} alt="..." />
              </a>
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: "url(" + terapia2 + ")",
                  opacity: "1"
                }}
              />
            </CardHeader>
            <CardBody plain>
              
              <h6>DUDAS</h6>
              
              <h4 className={classes.cardTitle}>
                <a href="/landingblog">
                  ¿Cómo interpretar lo que me dice mi terapeuta?
                </a>
              </h4>
              <p className={classes.description}>
                Cuando es la primera vez que vamos a terapia, normalmente
                no sabemos que interpretar de la informaciónq nuestro 
                terapeuta nos da, lo importante es...
                <br />
                <br />
                <a href="#pablo"> Leer artículo </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
