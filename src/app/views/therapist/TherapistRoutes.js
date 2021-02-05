import  React  from "react";

const TherapistHome = React.lazy(() => import('./TherapistHome'))

const TherapistBlogs = React.lazy(() => import('./TherapistBlogs'))

const BlogEntryForm = React.lazy(() => import('./components/BlogEntryForm'))

const TherapistCalendar = React.lazy(() => import('./TherapistCalendar'))

const PatientsList = React.lazy(() => import('./PatientList'))

const CompletedSessions = React.lazy(() => import('./TherapistsSessionsHistory'))

const Comments = React.lazy(() => import('./CommentsApp'))

const therapistRoutes = [
  {
      path: "/:tid/dashboard",
      component: TherapistHome
  },
  {
      path: "/:tid/appointments",
      component: TherapistCalendar
  },
  {
      path: "/:tid/myblogs",
      component: TherapistBlogs
  },
  {
      path: "/:tid/newblog",
      component: BlogEntryForm
  },
  {
      path: "/:tid/patients",
      component: PatientsList
  },
  {
      path:"/:tid/completedApp",
      component: CompletedSessions
  },
  {
      path: "/:tid/comments",
      component: Comments
  }
];

export default therapistRoutes;
