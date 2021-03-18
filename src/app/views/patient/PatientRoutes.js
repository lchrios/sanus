import  React  from "react";
import { authRoles } from '../../auth/authRoles'

const PatHome = React.lazy(() => import('./PatientProfile'))

const PatBrowse = React.lazy(() => import("./PatientBrowse"))

const PatSessions = React.lazy(() => import("./PatientSessions"))

// const PatPayMeth = React.lazy(() => import("./patientElements/changePayMeth/chekout"))



const patientRoutes = [
    {
        path: "/:pid/home",
        component: PatHome,
        exact: true,
        auth: authRoles.user,
        
    },
    {
        path: "/:pid/browse",
        component: PatBrowse,
        exact: true,
        auth: authRoles.user,
    },
    {
        path: "/:pid/sessions",
        component: PatSessions,
        exact: true,
        auth: authRoles.user,
    },
    
];

export default patientRoutes;