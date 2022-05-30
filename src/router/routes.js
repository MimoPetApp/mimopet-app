// import { Http } from "../http/http";
import pets from './modules/pets'
import auth from './modules/auth'
import training from './modules/training'
import userProfile from './modules/userProfile'
import obedience from './modules/obedience'
import membership from './modules/membership'
import notifications from './modules/notifications'
import { autentication } from '../middlewares/navigationGuards'

const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [...pets, ...userProfile, ...membership, ...notifications, ...obedience],
    beforeEnter: autentication
  },
  {
    path: '/treinamentos',
    component: () => import('layouts/TrainingLayout.vue'),
    children: [...training],
    beforeEnter: autentication
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [...auth]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/Error404.vue')
  }
]

export default routes
