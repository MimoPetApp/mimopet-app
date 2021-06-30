// import { Http } from "../http/http";
import pets from './modules/pets'
import auth from './modules/auth'
import { autentication } from '../middlewares/navigationGuards'

const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [...pets],
    beforeEnter: autentication
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('layouts/loginLayout'),
    children: [...auth]
  },
  {
    path: '/login-new',
    name: 'loginNew',
    component: () => import('src/screens/login/base/LoginBase.vue'),
    children: [
      {
        path: '',
        name: 'SignIn',
        component: () => import('src/screens/login/LoginScreen.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/Error404.vue')
  }
]

export default routes
