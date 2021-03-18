import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import Card from "./card";
import CardBody from "./cardBody";
import CardHeader from "./cardHeader";
import terapia from "assets/images/blog/terapia1.jpg";
import terapia1 from "assets/images/blog/terapia2.jpg";
import terapia2 from "assets/images/blog/terapia3.jpg";
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
                <a href="#pablo">
                ¿Cómo interpretar lo que me dice mi terapeuta?
                </a>
              </h4>
              <p className={classes.description}>
                  Cuando es la primera vez que vamos a terapia, normalmente
                  no sabemos que interpretar de la informaciónq nuestro 
                  terapeuta nos da, lo importante es...
                <a href="#pablo"> Leer artículo </a>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <Card plain blog>
            <CardHeader plain image>
              <a href="#pablo">
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
                <a href="#pablo">
                ¿Cómo interpretar lo que me dice mi terapeuta?
                </a>
              </h4>
              <p className={classes.description}>
                  Cuando es la primera vez que vamos a terapia, normalmente
                  no sabemos que interpretar de la informaciónq nuestro 
                  terapeuta nos da, lo importante es...
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
              <a href="#pablo">
              ¿Cómo interpretar lo que me dice mi terapeuta?
              </a>
            </h4>
            <p className={classes.description}>
                Cuando es la primera vez que vamos a terapia, normalmente
                no sabemos que interpretar de la informaciónq nuestro 
                terapeuta nos da, lo importante es...
              <a href="#pablo"> Leer artículo </a>
            </p>
          </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
