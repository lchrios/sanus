import React from "react";

const Home = React.lazy(() => import('./Home'))
const Blogs = React.lazy(() => import('./landingBlog/landingBlog'))
const Psychologists = React.lazy(() => import('./psychologists/landingPsy'))

/** 
 * TODO LA RUTA BLOG ID NO DEBERÍA FUNCIONAR ASÍ, ESTÁ HARDCODEADO PARA VISUALIZAR LOS ELEMENTOS
 */

const Blog = React.lazy(() => import ('./blogEntrie/BlogEntrie'))

const settings = {
  activeLayout: "layout1",
  layout1Settings: {
    topbar: {
      show: false
    },
    leftSidebar: {
      show: false,
      mode: "close"
    }
  },
  layout2Settings: {
    mode: "full",
    topbar: {
      show: false
    },
    navbar: { show: false }
  },
  secondarySidebar: { show: false },
  footer: { show: false }
};

const landingRoutes = [
  {
    path: "/home",
    component: Home,
    settings
  },
  {
    path:'/blogs',
    component:Blogs
  },
  {
    path:'/psychologists',
    component: Psychologists
  },
  {
    path:'/blogID',
    component: Blog
  }
];

export default landingRoutes;
