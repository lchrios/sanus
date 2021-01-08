import  React  from "react";

const TherapistHome = React.lazy(() => import('./TherapistHome'))

const TherapistBlogs = React.lazy(() => import('./TherapistBlogs'))

const BlogEntryForm = React.lazy(() => import('./BlogEntryForm'))

const therapistRoutes = [
  {
      path: "/:tid/appointments",
      component: TherapistHome
  },
  {
      path: "/:tid/myblogs",
      component: TherapistBlogs
  },
  {
      path: "/:tid/myblogs/new",
      component: BlogEntryForm
  }
];

export default therapistRoutes;
