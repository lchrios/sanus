import React from "react";

const Home = React.lazy(() => import('./Home'))


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
  }
];

export default landingRoutes;
