// import { Http } from "../http/http";
import pets from './modules/pets'
import auth from './modules/auth'
import trainning from '../views/pets/petTrainning/trainningDetails.vue'
import subscription from '../views/pets/petTrainning/confirmSubscription.vue'
import trainingDetails from '../views/pets/petTrainning/mytrainningDetails.vue'
import trainingDetailsID from '../views/pets/petTrainning/trainingDetailsId.vue'
import trainingConditions from '../views/pets/petTrainning/trainingConditions.vue'
import trainingVideo from '../views/pets/petTrainning/trainingVideo.vue'
import trainingVideoFull from '../views/pets/petTrainning/trainingVideoFullScreen.vue'
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
    component: () => trainning
  },
  {
    path: '/subscription/:id',
    name: 'confirmSubscription',
    component: () => subscription
  },
  {
    path: '/trainingDetails/:id',
    name: 'trainingDetails',
    component: () => trainingDetails
  },
  {
    path: '/trainingDetailsId/:id',
    name: 'trainingDetailsId',
    component: () => trainingDetailsID
  },
  {
    path: '/trainingConditions',
    name: 'trainingConditions',
    component: () => trainingConditions
  },
  {
    path: '/trainingVideoFullScreen',
    name: 'trainingVideoFull',
    component: () => trainingVideoFull
  },
  {
    path: '/trainingVideo',
    name: 'trainingVideo',
    component: () => trainingVideo
  },
  {
    path: '/:catchAll (.*)*',
    component: () => import('../views/Error404.vue')
  }
]

export default routes
