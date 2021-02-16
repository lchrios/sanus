import React from 'react'
import { Redirect } from 'react-router-dom'

// import utilitiesRoutes from './views/mat-xutilities/UtilitiesRoutes'

// import materialRoutes from './views/mat-x pro/material-kit/MaterialRoutes'
// import chartsRoute from './views/mat-x pro/charts/ChartsRoute'
// import dragAndDropRoute from './views/mat-x pro/Drag&Drop/DragAndDropRoute'
// import invoiceRoutes from './views/mat-x pro/invoice/InvoioceRoutes'
// import calendarRoutes from './views/mat-x pro/calendar/CalendarRoutes'
// import crudRoute from './views/mat-x pro/CRUD/CrudRoutes'
// import inboxRoute from './views/mat-x pro/inbox/InboxRoutes'
// import formsRoutes from './viewsmat-x pro/forms/FormsRoutes'
// import mapRoutes from './views/mat-x pro/map/MapRoutes'
// import chatRoutes from './views/mat-x pro/chat-box/ChatRoutes'
// import todoRoutes from './views/mat-x pro/todo/TodoRoutes'
// import pageLayoutRoutes from './views/mat-x pro/page-layouts/PageLayoutRoutees'
// import ListRoute from './views/mat-x pro/list/ListRoute'

// import pricingRoutes from './views/pricing/PricingRoutes'
// import scrumBoardRoutes from './views/scrum-board/ScrumBoardRoutes'
// import ecommerceRoutes from './views/ecommerce/EcommerceRoutes'
// import pagesRoutes from './views/pages/pagesRoutes'
// import dataTableRoutes from './views/data-table/dataTableRoutes'
import landingRoutes from './views/landing/LandingRoutes'
import patientRoutes from './views/patient/PatientRoutes'
import therapistRoutes from './views/therapist/TherapistRoutes'
import adminRoutes from './views/admin/AdminRoutes'

const redirectRoute = [
    {
      path: "/",
      exact: true,
      component: () => <Redirect to="/home" />
    },
  ];

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    },
]

const routes = [
    /*...adminRoutes,
    ...materialRoutes,
    ...utilitiesRoutes,
    ...chartsRoute,
    ...dragAndDropRoute,
    ...calendarRoutes,
    ...invoiceRoutes,
    ...crudRoute,
    ...inboxRoute,
    ...formsRoutes,
    ...mapRoutes,
    ...chatRoutes,
    ...todoRoutes,
    ...scrumBoardRoutes,
    ...ecommerceRoutes,
    ...pageLayoutRoutes,
    ...pricingRoutes,
    ...ListRoute,
    ...pagesRoutes,
    ...dataTableRoutes,*/
    ...adminRoutes,
    ...redirectRoute,
    ...patientRoutes,
    ...therapistRoutes,
    ...landingRoutes,
    ...errorRoute,
]

export default routes
