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
        exact: false,
        auth: authRoles.user,
        
    },
    {
        path: "/:pid/browse",
        component: PatBrowse,
        exact: false,
        auth: authRoles.user,
    },
    {
        path: "/:pid/sessions",
        component: PatSessions,
        exact: false,
        auth: authRoles.user,
    },
    // {
    //     path:"/:pid/changepaymethod",
    //     component: PatPayMeth,
    //     exact: false,
    //     auth: authRoles.user,
    // },
    
];

export default patientRoutes;