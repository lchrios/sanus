import React from "react";
import history from '../../../../../history'
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import Card from "./card";
import CardHeader from "./cardHeader";
import CardBody from "./cardBody";
import CardFooter from "./cardFooter.jsx";
import Button from "./button.jsx";
import landingPsyStyles from "./styles/landingPsyStyles";
import Violeta from "assets/images/psicólogos/Violeta.PNG";
import Sandra from "assets/images/psicólogos/Sandra.PNG";
import Ivonne from 'assets/images/psicólogos/Ivonne.jpg';
import PatyAnahi from 'assets/images/psicólogos/PatyAnahi.JPG';

const useStyles = makeStyles(landingPsyStyles);

export default function LandingPsySection({ ...rest }) {
 
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Team 1 START */}
      {/* Team 1 END */}
      {/* Team 2 START */}
      {/* Team 2 END */}
      {/* Team 3 START */}
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Nuestros profesionales</h2>
              <h5 className={classes.description}>
                  Nuestro equipo de terapeutas está altamente capacitado
                  para atenderte con el mayor profesionalismo y privacidad 
                  que requieres para atender los temas más sensibles de tu
                  vida.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={Violeta} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${Violeta})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                      <h4 className={classes.cardTitle}>Violeta Détré</h4>
                      
                        <h6 className={classes.cardCategory}>Terapeuta familiar</h6>
                      
                      <p className={classes.description}>
                      15 años de experiencia profesional en el ámbito clínico y
                      empresarial.
                      </p>
                      <h6 className={classes.cardCategory}>Formación</h6>
                      <p className={classes.description}>
                      <b>UNIVA de Guadalajara</b>: Licenciatura en psicología
                      </p>
                      <p className={classes.description}>
                      <b>UNIVA de Guadalajara</b>: Maestría de terapia familiar sistemática
                      </p>
                  
                    </CardBody>
                    <CardFooter profile plain>
                      <Button className="ml-2" color="twitter" onClick={() => history.push('/session/signin')}>
                          Comenzar
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
                        <img src={Sandra} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${Sandra})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                      <h4 className={classes.cardTitle}>Sandra Jaramillo Martínez</h4>
                      
                        <h6 className={classes.cardCategory}>
                        Psicóloga y psicoterapeuta familiar sistémica,
                        </h6>
                      
                      <p className={classes.description}>
                      11 años de experiencia en terapia psicológica.
                      </p>

                      <h6 className={classes.cardCategory}>Formación</h6>
                      <p className={classes.description}>
                      <b>Universidad Autonóma Metropolitana Unidad Xochimilco</b>: Licenciatura en psicología
                      </p>
                      <p className={classes.description}>
                      <b>CRISOL Centro de Posgrado en Terapia Familiar Clinica de Familia y Pareja </b>: Maestría de terapia familiar sistemática
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                    <Button className="ml-2" color="twitter" onClick={() => history.push('/session/signin')}>
                          Comenzar
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
                        <img src={Ivonne} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${Ivonne})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                      <h4 className={classes.cardTitle}>Verónica Ivonne Paquentin Falcón</h4>
                      
                        <h6 className={classes.cardCategory}>Doctora en Psicóloga</h6>
                      
                      <p className={classes.description}>
                      23 años de experiencia como psicoterapeuta.
                      </p>

                      <h6 className={classes.cardCategory}>Formación</h6>
                      <p className={classes.description}>
                      <b>Universidad Nacional Autónoma de México</b>: Doctora en psicología
                      </p>
                      <p className={classes.description}>
                      <b>Universidad de las Américas, A.C.</b>: Maestría en Psicología con Orientación en Terapia Familiar
                      </p>

                    </CardBody>
                    <CardFooter profile plain>
                    <Button className="ml-2" color="twitter" onClick={() => history.push('/session/signin')}>
                          Comenzar
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
                        <img src={PatyAnahi} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${PatyAnahi})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Patricia Anahi Hernández Márquez</h4>
                      
                        <h6 className={classes.cardCategory}>Médico cirujano y partero. Psicquiatra. Psicogeriatra.</h6>
                      
                      <p className={classes.description}>
                      3 años de experiencia como psicogeriatra
                      </p>

                      <h6 className={classes.cardCategory}>Formación</h6>
                      <p className={classes.description}>
                      <b>Hospital Psiquiátrico Fray Bernardino Álvarez</b>: Alta especialidad médica en Psicogeriatría
                      </p>
                      <p className={classes.description}>
                      <b>Hospital Psiquiátrico Fray Bernardino Álvarez</b>: Especialidad Médica en Psiquiatría
                      </p>

                    
                    </CardBody>
                    <CardFooter profile plain>
                    <Button className="ml-2" color="twitter" onClick={() => history.push('/session/signin')}>
                          Comenzar
                    </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 3 END */}
      {/* Team 4 END */}
      {/* Team 5 START */}
      {/* Team 5 END */}
    </div>
  );
}
