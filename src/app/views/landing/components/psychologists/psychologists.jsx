import React from "react";
import history from '../../../../../history'
import { makeStyles } from "@material-ui/core/styles";
import classNames from 'classnames'
// core components
import GridContainer from "./elements/GridContainer";
import GridItem from "./elements/GidItem";
import Card from "../eachComponent/components/Card/Card";
import CardHeader from "../eachComponent/components/Card/CardHeader";
import CardBody from "../eachComponent/components/Card/CardBody";
import CardFooter from "../eachComponent/components/Card/CardFooter";
import Button from "../eachComponent/components/CustomButtons/Button";
import Violeta from "assets/images/psicólogos/Violeta.PNG";
import Sandra from "assets/images/psicólogos/Sandra.PNG";
import Ivonne from 'assets/images/psicólogos/Ivonne.jpg'
import psyCardsStyle from "./styles/psyCardsStyles.js";
import psyCardStyle from "./styles/psyCardStyle";
import PatyAnahi from 'assets/images/psicólogos/PatyAnahi.JPG';

  
const style = {
  ...psyCardsStyle,
  ...psyCardStyle,
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
      <h2 className={classes.title}> Conoce a nuestro equipo de profesionales </h2>
      <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
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
                  <GridItem xs={12} sm={12} md={6}>
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
                  
                      <Button onClick={() => history.push('/session/signup')} color="primary">Agendar una sesión</Button>
                    </CardBody>
                      {/* por el momento no tienen utilidad alguna
                       <CardFooter profile plain>
                      </CardFooter> */}
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
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
                  <GridItem xs={12} sm={12} md={6}>
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
                      <Button onClick={() => history.push('/session/signup')} color="primary">Agendar una sesión</Button>
                    </CardBody>
                    {/* por el momento no tienen utilidad alguna
                     <CardFooter profile plain>
                    </CardFooter> */}
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            {/* 
            *  /** 
            * *  se puede reutilizar el elemento (comentado así por errores de extensión)
            *  */}

             {/* <GridItem xs={12} sm={12} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={fake1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${fake1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Maria Ana Magdalena Quiroz Pecina</h4>
                      
                        <h6 className={classes.cardCategory}>Jefatura de Ciencias de la Salud</h6>
                      
                      <p className={classes.description}>
                      5 años de experiencia en terapia psicológica y  
                      maestría en psicoanálisis.
                      </p>
                      <Button onClick={() => history.push('/session/signup')} color="primary">Agendar una sesión</Button>
                    </CardBody>
                    <CardFooter profile plain>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>  */}
            <GridItem xs={12} sm={12} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
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
                  <GridItem xs={12} sm={12} md={6}>
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

                      <Button onClick={() => history.push('/session/signup')} color="primary">Agendar una sesión</Button>
                    </CardBody>

                    {/* /**
                    * * por el momento no tienen utilidad alguna
                    <CardFooter profile plain>
                    </CardFooter> 
                    */ }

                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
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
                  <GridItem xs={12} sm={12} md={6}>
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

                      <Button onClick={() => history.push('/session/signup')} color="primary">Agendar una sesión</Button>
                    
                    </CardBody>

                    {/* /**
                    * * por el momento no tienen utilidad alguna
                    <CardFooter profile plain>
                    </CardFooter> 
                    */ }

                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
          <Button className="mt-10" color="twitter" onClick={() => history.push('/therapists')}>Conoce a todos nuestros profesionales</Button>
      </div>
    </div>
  </div>
  );
}
