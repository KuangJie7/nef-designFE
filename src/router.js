import Login from './components/loginpage/Login.vue'
import Register from './components/loginpage/Register.vue'
import PasswordFind from './components/loginpage/PasswordFind.vue'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register 
    },
    {
        path: '/password_find',
        component: PasswordFind
    }
]

export default routes