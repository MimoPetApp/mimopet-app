// import { Http } from "../http/http";
import pets from './modules/pets'
import auth from './modules/auth'
import trainning from '../views/pets/petTrainning/trainingPet.vue'
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
    path: '/:catchAll(.*)*',
    component: () => import('../views/Error404.vue')
  },
  {
    path: '/trainning/:petid',
    name: 'trainning',
    component: () => trainning
  }
]

export default routes
