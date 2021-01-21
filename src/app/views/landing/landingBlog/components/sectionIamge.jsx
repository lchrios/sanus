import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import Card from "./card";
import CardHeader from "./cardHeader";
import CardBody from "./cardBody";
import CardFooter from "./cardFooter";

import Button from "./button";

import session1 from "assets/images/psychologists/session1.jpg";
import sectionImageStyle from "../landingBlogStyles/sectionImageStyle";

const useStyles = makeStyles(sectionImageStyle);

export default function SectionImage() {
  const classes = useStyles();
  return (
    <div
      className={classes.section}
      style={{ backgroundImage: "url(" + session1 + ")" }}
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.textLeft}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img src={session1} alt="..." />
                    </a>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Alec Thompson</h4>
                    
                      <h6>AUTHOR OF THE MONTH</h6>
                    
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-google" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.textLeft}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo">
                      <img src={session1} alt="..." />
                    </a>
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                    
                      <h6>AUTHOR OF THE WEEK</h6>
                    
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter profile plain>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-linkedin-in" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button justIcon simple color="white" href="#pablo">
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
  );
}
