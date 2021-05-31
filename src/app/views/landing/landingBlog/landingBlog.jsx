/*eslint-disable*/
import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "./components/GridContainer";
import GridItem from "./components/GridItem";
import Parallax from "./components/parallax.jsx";
import Navbar from '../components/Navbar_sc/NavbarIndex'
// sections for this page
import BlogCards from "./components/BlogCards";
import SearchBox from './landingBlogStyles/searchBoxStyle'
import InterestedSection from "./components/lessImpBlog";
import SubscribeLine from "./components/subscribeLine";
import landingBlogStyles from "./landingBlogStyles/landingBlogStyles";
import Sidebar from "../components/SideBar/SidebarIndex";




const useStyles = makeStyles(landingBlogStyles);

export default function landingBlog() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const [is0pen, setIs0pen] = useState(false);

  const toggle = () => {
    setIs0pen(!is0pen)
  }

  return (
    <div>
      <Navbar toggle = {toggle} />
      <Sidebar is0pen={is0pen} toggle={toggle}/>
      <Parallax image={require("assets/images/psychologists/session1.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                Busca un tema
              </h2>
              <SearchBox />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <BlogCards />
          <InterestedSection />
        </div>
        <SubscribeLine />
      </div>
    </div>
  );
}
