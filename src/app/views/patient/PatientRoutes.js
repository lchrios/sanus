import  React  from "react";

const PatHome = React.lazy(() => import('./PatientHome'))

const PatBrowse = React.lazy(() => import("./PatientBrowse"))

const PatSessions = React.lazy(() => import("./PatientSessions"))

const PatPayMeth = React.lazy(() => import("./patientElements/changePayMeth/chekout"))


const patientRoutes = [
  {
      path: "/:pid/home",
      component: PatHome
  },
  {
      path: "/:pid/browse",
      component: PatBrowse
  },
  {
      path: "/:pid/sessions",
      component: PatSessions
  },
  {
      path:"/:pid/changepaymethod",
      component: PatPayMeth
  },
];

export default patientRoutes;