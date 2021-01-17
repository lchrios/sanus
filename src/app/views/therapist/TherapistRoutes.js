import  React  from "react";

const TherapistHome = React.lazy(() => import('./TherapistHome'))

const TherapistBlogs = React.lazy(() => import('./TherapistBlogs'))

const BlogEntryForm = React.lazy(() => import('./components/BlogEntryForm'))

const TherapistCalendar = React.lazy(() => import('./TherapistCalendar'))

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
  }
];

export default therapistRoutes;
