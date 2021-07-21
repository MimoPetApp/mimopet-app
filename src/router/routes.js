// import { Http } from "../http/http";
import pets from './modules/pets'
import auth from './modules/auth'
import training from '../views/pets/petTrainning/trainingPet.vue'
import trainingDetails from '../views/pets/petTrainning/trainningDetails.vue'
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
    path: '/training/:petid',
    name: 'training',
    component: () => training
  },

  {
    path: '/trainingConditions',
    name: 'trainingConditions',
    component: () => trainingConditions
  },
  {
    path: '/trainingDetails/:id',
    name: 'trainingDetails',
    component: () => trainingDetails
  }

]

export default routes
