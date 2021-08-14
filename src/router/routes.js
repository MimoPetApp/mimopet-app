// import { Http } from "../http/http";
import pets from './modules/pets'
import auth from './modules/auth'
import trainingDetailsId from '../views/pets/petTrainning/trainingDetailsID.vue'
import trainingConditions from '../views/pets/petTrainning/trainingConditions.vue'
import { autentication } from '../middlewares/navigationGuards'

const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [...pets],
    beforeEnter: autentication
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/pets/petsList/petsList.vue')
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
    path: '/trainingConditions',
    name: 'trainingConditions',
    component: () => trainingConditions
  },
  {
    path: '/trainingDetailsId/:id',
    name: 'trainingDetailsId',
    component: () => trainingDetailsId
  }
]

export default routes
