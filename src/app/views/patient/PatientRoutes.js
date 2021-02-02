import  React  from "react";

const PatHome = React.lazy(() => import('./patientElements/home/user-profile/PatientProfile'))

const PatBrowse = React.lazy(() => import("./PatientBrowse"))

const PatSessions = React.lazy(() => import("./PatientSessions"))

const PatPayMeth = React.lazy(() => import("./patientElements/changePayMeth/chekout"))


const patientRoutes = [
  {
      path: "/:pid/home",
      component: PatHome,
      exact: false
  },
  {
      path: "/:pid/browse",
      component: PatBrowse,
      exact: false
  },
  {
      path: "/:pid/sessions",
      component: PatSessions,
      exact: false
  },
  {
      path:"/:pid/changepaymethod",
      component: PatPayMeth,
      exact: false
  },
];

export default patientRoutes;