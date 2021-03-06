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
import Violeta from "assets/images/especialistas/psico1.jpg";
import Sandra from "assets/images/especialistas/psico2.jpg";
import Ivonne from 'assets/images/especialistas/nutri1.jpg'
import PatyAnahi from 'assets/images/especialistas/nutri2.jpeg';
import psyCardsStyle from "./styles/psyCardsStyles.js";
import psyCardStyle from "./styles/psyCardStyle";

  
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
                      <h4 className={classes.cardTitle}>Violeta Rosas</h4>
                      
                        <h6 className={classes.cardCategory}>Terapeuta familiar</h6>
                      
                      <p className={classes.description}>
                      15 a??os de experiencia profesional en el ??mbito cl??nico y
                      empresarial.
                      </p>
                      <h6 className={classes.cardCategory}>Formaci??n</h6>
                      <p className={classes.description}>
                      <b>UNIVA de Guadalajara</b>: Licenciatura en psicolog??a
                      </p>
                      <p className={classes.description}>
                      <b>UNIVA de Guadalajara</b>: Maestr??a de terapia familiar sistem??tica
                      </p>
                  
                      <Button onClick={() => history.push('/session/signup')} color="primary">Agendar una sesi??n</Button>
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
                      <h4 className={classes.cardTitle}>Sandra P??rez</h4>
                      
                        <h6 className={classes.cardCategory}>
                        Psic??loga y psicoterapeuta familiar sist??mica,
                        </h6>
                      
                      <p className={classes.description}>
                      11 a??os de experiencia en terapia psicol??gica.
                      </p>

                      <h6 className={classes.cardCategory}>Formaci??n</h6>
                      <p className={classes.description}>
                      <b>Universidad Auton??ma Metropolitana Unidad Xochimilco</b>: Licenciatura en psicolog??a
                      </p>
                      <p className={classes.description}>
                      <b>CRISOL Centro de Posgrado en Terapia Familiar Clinica de Familia y Pareja </b>: Maestr??a de terapia familiar sistem??tica
                      </p>
                      <Button onClick={() => history.push('/session/signup')} color="primary">Agendar una sesi??n</Button>
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
            * *  se puede reutilizar el elemento (comentado as?? por errores de extensi??n)
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
                      5 a??os de experiencia en terapia psicol??gica y  
                      maestr??a en psicoan??lisis.
                      </p>
                      <Button onClick={() => history.push('/session/signup')} color="primary">Agendar una sesi??n</Button>
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
                      <h4 className={classes.cardTitle}>Iv??n Benitez</h4>
                      
                        <h6 className={classes.cardCategory}>Lic. en nutriolog??a</h6>
                      
                      <p className={classes.description}>
                        8 a??os de experiencia como nutri??logo.
                      </p>

                      <h6 className={classes.cardCategory}>Formaci??n</h6>
                      <p className={classes.description}>
                      <b>Universidad Nacional Aut??noma de M??xico</b>: Lic. en nutriolog??a
                      </p>
                      <p className={classes.description}>
                      <b>Universidad de las Am??ricas, A.C.</b>: Maestr??a en Nutriolog??a Pedi??trica
                      </p>

                      <Button onClick={() => history.push('/session/signup')} color="primary">Agendar una sesi??n</Button>
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
                      <h4 className={classes.cardTitle}>Marcela Fern??ndez</h4>
                      
                        <h6 className={classes.cardCategory}>Lic. en nutriolog??a</h6>
                      
                      <p className={classes.description}>
                      6 a??os de experiencia como nutriologa
                      </p>

                      <h6 className={classes.cardCategory}>Formaci??n</h6>
                      <p className={classes.description}>
                      <b>Hospital Psiqui??trico Fray Bernardino ??lvarez</b>: Alta especialidad m??dica en Psicogeriatr??a
                      </p>
                      <p className={classes.description}>
                      <b>Hospital Psiqui??trico Fray Bernardino ??lvarez</b>: Especialidad M??dica en Psiquiatr??a
                      </p>

                      <Button onClick={() => history.push('/session/signup')} color="primary">Agendar una sesi??n</Button>
                    
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
