import FirebaseLogin from './login/FirebaseLogin'
import NotFound from './NotFound'
import ForgotPassword from './ForgotPassword'
import FirebaseRegister from './register/FirebaseRegister'
import UserDataForm from './register/UserDataForm'

const sessionRoutes = [
    {
        path: '/session/signup',
        component: FirebaseRegister,
    },
    {
        path: '/session/dataform',
        component: UserDataForm,
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
