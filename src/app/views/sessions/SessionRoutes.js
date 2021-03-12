import FirebaseLogin from './login/FirebaseLogin'
import NotFound from './NotFound'
import ForgotPassword from './ForgotPassword'
import FirebaseRegister from './register/FirebaseRegister'
import TherapistDataForm from './register/TherapistDataForm'
import TherapistFirebaseRegister from './register/TherapistFirebaseRegister'
import UserDataForm from './register/UserDataForm'

const sessionRoutes = [
    {
        path: '/session/signup',
        component: FirebaseRegister,
    },
    {
        path: '/session/register',
        component: UserDataForm,
    },
    {
        path:'/therapist/info',
        component:TherapistDataForm
    },
    {
        path:'/therapist/signup',
        component: TherapistFirebaseRegister
    },
    {
        path: '/session/signin',
        component: FirebaseLogin,
    },
    {
        path: '/session/forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/session/404',
        component: NotFound,
    },
]

export default sessionRoutes
