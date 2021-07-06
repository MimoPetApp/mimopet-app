// import { Http } from "../http/http";
import pets from './modules/pets'
import auth from './modules/auth'
import trainning from '../views/pets/petTrainning/trainningDetails.vue'
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
    path: '/detalhes/:id',
    name: 'detalhes',
    component: () => (trainning)
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/Error404.vue')
  }
]

export default routes
