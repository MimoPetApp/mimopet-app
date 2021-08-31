// import { Http } from "../http/http";
import pets from './modules/pets'
import auth from './modules/auth'
import training from './modules/training'
import userProfile from './modules/userProfile'
import { autentication } from '../middlewares/navigationGuards'

const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [...pets, ...userProfile],
    beforeEnter: autentication
  },
  {
    path: '/training',
    component: () => import('layouts/TrainingLayout.vue'),
    children: [...training],
    beforeEnter: autentication
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('layouts/loginLayout'),
    children: [...auth]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/Error404.vue')
  }
]

export default routes
