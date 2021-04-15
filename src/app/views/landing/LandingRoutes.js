import React from "react";
const Home = React.lazy(() => import('./Home'))
const LandingBlog = React.lazy(() => import('./landingBlog/landingBlog'))
const Psychologists = React.lazy(() => import('./psychologists/landingPsy'))
const LandingBlogEntry = React.lazy(() => import('./landingBlog/LandingBlogEntry'))

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
        component:LandingBlog,
        settings
    },
    {
        path:'/psychologists',
        component: Psychologists,
        settings
    },
    {
        path: '/blog/:bid',
        component: LandingBlogEntry,
        settings
    },
];

export default landingRoutes;
