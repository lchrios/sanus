/*eslint-disable*/
import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "./components/GridContainer";
import GridItem from "./components/GridItem";
import Parallax from "./components/parallax.jsx";
import Navbar from '../components/Navbar_sc/NavbarIndex'
// sections for this page
import { useLocation } from "react-router";

import parse from "html-react-parser";
import { Loading } from "app/components/Loading/Loading";
import api from "app/services/api";
import {
    container,
    title,
    main,
    whiteColor,
    mainRaised
  } from "../landingBlog/landingBlogStyles/assets";
  
const useStyles = makeStyles({
    container: {
      ...container,
      zIndex: "2",
      position: "relative"
    },
    textCenter: {
      textAlign: "center"
    },
    title: {
      ...title,
      color: whiteColor
    },
    main: {
      ...main,
      ...mainRaised
    },
    block: {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block"
    },
    inlineBlock: {
      display: "inline-block",
      padding: "0px",
      width: "auto"
    },
    list: {
      marginBottom: "0",
      padding: "0",
      marginTop: "0"
    },
    left: {
      float: "left!important",
      display: "block"
    },
    right: {
      padding: "15px 0",
      margin: "0",
      float: "right"
    },
    icon: {
      width: "18px",
      height: "18px",
      top: "3px",
      position: "relative"
    }
  });

export default function landingBlog() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //     document.body.scrollTop = 0;
    // }, []);
    const classes = useStyles();
    
    const [blog, setBlog] = useState();
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        api.get(`/b/${location.pathname.split('/blog/')[1]}`)
        .then(res => {
            console.log(res.data)
            setBlog(res.data);
            setLoading(false)
        })
    }, [])

    return (<>{
        loading ? <Loading /> :
        <div>
            <Navbar />
            <Parallax image={require("assets/images/psychologists/session1.jpg")} filter="dark" small>
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                            <h2 className={classes.title}>
                                {blog?.title}
                            </h2>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classes.main}>
                <div className={classes.container}>
                    {parse(blog.content || "<p>No hay nada para mostrar</p>")}
                </div>
            </div>
        </div>
    }</>
    );
}
