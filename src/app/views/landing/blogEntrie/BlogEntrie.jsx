/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// core components
import GridContainer from "../landingBlog/components/GridContainer";
import GridItem from "../landingBlog/components/GridItem";
import Parallax from "../landingBlog/components/parallax";
import Navbar from '../components/Navbar_sc/NavbarIndex'

import SubscribeLine from "../landingBlog/components/subscribeLine";

import landingBlogStyles from "../landingBlog/landingBlogStyles/landingBlogStyles";




const useStyles = makeStyles(landingBlogStyles);

export default function BlogEntrie() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Parallax image={require("assets/images/psychologists/session1.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                Título del blog
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <p>Contenido de la entrada de blog</p>
        </div>
        <SubscribeLine />
      </div>
    </div>
  );
}
