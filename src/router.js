import Login from './components/loginpage/Login.vue'
import Register from './components/loginpage/Register.vue'
import PasswordFind from './components/loginpage/PasswordFind.vue'
import User from './components/loginpage/User.vue'
import Orders from './components/orderspage/Orders.vue'
import Overview from './components/orderspage/Overview.vue'
import Perchase from './components/orderspage/Perchase.vue'

const routes = [
    {
        path: '/',
        redirect: '/user/login'
    },
    {
        path: '/user',
        component: User,
        children: [
            {
                path: 'login',
                component: Login
            },
            {
                path: 'register',
                component: Register 
            },
            {
                path: 'password_find',
                component: PasswordFind
            }
        ]
    },
    {
        path: '/orders',
        component: Orders,
        redirect: '/orders/overview',
        children: [
            {
                path: 'overview',
                component: Overview
            }, 
            {
                path: 'perchase',
                component: Perchase
            }
        ]
    }
]

export default routes