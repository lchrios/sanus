import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import Card from "./card";
import CardAvatar from "./CardAvatar.js";
import CardHeader from "./cardHeader";
import CardBody from "./cardBody";
import CardFooter from "./cardFooter.js";
import Button from "./button.js";

import landingPsyStyles from "./styles/landingPsyStyles";


import session1 from "assets/images/psychologists/session1.jpg";

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
              <h2 className={classes.title}>The Executive Team 3</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Alec Thompson</h4>
                      
                        <h6 className={classes.cardCategory}>FOUNDER</h6>
                      
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                      
                        <h6 className={classes.cardCategory}>
                          GRAPHIC DESIGNER
                        </h6>
                      
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Gina Andrew</h4>
                      
                        <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                      
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="instagram">
                        <i className="fab fa-instagram" />
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>George West</h4>
                      
                        <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                      
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Alec Thompson</h4>
                      
                        <h6 className={classes.cardCategory}>FOUNDER</h6>
                      
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                      
                        <h6 className={classes.cardCategory}>
                          GRAPHIC DESIGNER
                        </h6>
                      
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Gina Andrew</h4>
                      
                        <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                      
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="instagram">
                        <i className="fab fa-instagram" />
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>George West</h4>
                      
                        <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                      
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Alec Thompson</h4>
                      
                        <h6 className={classes.cardCategory}>FOUNDER</h6>
                      
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                      
                        <h6 className={classes.cardCategory}>
                          GRAPHIC DESIGNER
                        </h6>
                      
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Gina Andrew</h4>
                      
                        <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                      
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="instagram">
                        <i className="fab fa-instagram" />
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>George West</h4>
                      
                        <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                      
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card3}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Alec Thompson</h4>
                      
                        <h6 className={classes.cardCategory}>FOUNDER</h6>
                      
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                      
                        <h6 className={classes.cardCategory}>
                          GRAPHIC DESIGNER
                        </h6>
                      
                      <p className={classes.description}>
                        Don{"'"}t be scared of the truth because we need to
                        restart the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="dribbble">
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Gina Andrew</h4>
                      
                        <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                      
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="youtube">
                        <i className="fab fa-youtube" />
                      </Button>
                      <Button justIcon simple color="twitter">
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple color="instagram">
                        <i className="fab fa-instagram" />
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
                        <img src={session1} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${session1})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>George West</h4>
                      
                        <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                      
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don{"'"}t be scared
                        of the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple color="linkedin">
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple color="facebook">
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple color="google">
                        <i className="fab fa-google" />
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
