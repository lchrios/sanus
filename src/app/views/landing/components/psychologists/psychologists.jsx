import React from "react";
import history from '../../../../../history'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from 'classnames'
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "../eachComponent/components/Grid/GridContainer";
import GridItem from "../eachComponent/components/Grid/GridItem";
import Card from "../eachComponent/components/Card/Card";
import CardHeader from "../eachComponent/components/Card/CardHeader";
import CardBody from "../eachComponent/components/Card/CardBody";
import CardFooter from "../eachComponent/components/Card/CardFooter";
import Muted from "../eachComponent/components/Typography/Muted";
import Button from "../eachComponent/components/CustomButtons/Button";

import cardProfile1Square from "assets/images/faces/profile faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/images/faces/profile faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/images/faces/profile faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/images/faces/profile faces/card-profile6-square.jpg";

import teamsStyle from "../eachComponent/components/componentsStyle/componentsStyle/psySectionStyle";
import teamStyle from "../eachComponent/components/componentsStyle/psyStyle";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

const useStyles = makeStyles(style);

export default function PsySection() {
  const classes = useStyles();
  return (
  <div className={classNames(classes.main, classes.mainRaised)}>
    <div className={classes.section}>
      <h2 className={classes.title}> Terapeutas </h2>
      <div>
        <GridContainer className={classes.container} className="p-30">
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile1Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile1Square})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>Piscoanalista lacaniano</h6>
                    </Muted>
                    <p className={classes.description}>
                      Conoce a uno de nuestros mejores terapeutas, sientete comodo de platicar 
                      con el antes de agendar una cita. Continúa tu crecimiento personal con Alec.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button onClick={() => history.push('/session/signin')} round color="twitter">
                      Contactar
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile6Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile6Square})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>GRAPHIC DESIGNER</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button onClick={() => history.push('/session/signin')} round color="twitter">
                      Contactar
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile4Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile4Square})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Gina Andrew</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                    </Muted>
                    <p className={classes.description}>
                      I love you like Kanye loves Kanye. Don{"'"}t be scared of
                      the truth.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button onClick={() => history.push('/session/signin')} round color="twitter">
                      Contactar
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile2Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile2Square})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>George West</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                    </Muted>
                    <p className={classes.description}>
                      I love you like Kanye loves Kanye. Don{"'"}t be scared of
                      the truth.
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button onClick={() => history.push('/session/signin')} round color="twitter">
                      Contactar
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  </div>
  );
}
