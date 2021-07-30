// import { Http } from "../http/http";
import pets from './modules/pets'
import auth from './modules/auth'
// import training from '../views/pets/petTrainning/trainingPet.vue'
// import trainingDetails from '../views/pets/petTrainning/trainningDetails.vue'
import trainingDetailsId from '../views/pets/petTrainning/trainingDetailsID.vue'
// import trainingDetailsAll from '../views/pets/petTrainning/mytrainningDetails.vue'
import trainingConditions from '../views/pets/petTrainning/trainingConditions.vue'
import trainingVideo from '../views/pets/petTrainning/trainingVideo.vue'
// import trainingConfirm from '../views/pets/petTrainning/confirmSubscription.vue'
import curArticle from '../views/pets/petTrainning/curriculum.article.vue'
import curLecture from '../views/pets/petTrainning/curriculum.lecture.vue'
import curQuizz from '../views/pets/petTrainning/curriculum.quizz.vue'
import curRepetitions from '../views/pets/petTrainning/curriculum.repetitions.vue'
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
  /* {
    path: '/training/:petid',
    name: 'training',
    component: () => training
  },
 */
  {
    path: '/trainingConditions',
    name: 'trainingConditions',
    component: () => trainingConditions
  },

  /* {
    path: '/trainingConfirm/:id',
    name: 'trainingConfirm',
    component: () => trainingConfirm
  }, */

  /*  {
    path: '/trainingDetailsAll/:id',
    name: 'trainingDetailsAll',
    component: () => trainingDetailsAll
  }, */
  {
    path: '/trainingDetailsId/:id',
    name: 'trainingDetailsId',
    component: () => trainingDetailsId
  },
  /* {
    path: '/trainingDetails/:id',
    name: 'trainingDetails',
    component: () => trainingDetails
  }, */
  {
    path: '/curriculum.article/:id/:item',
    name: 'curriculum.article',
    component: () => curArticle
  },
  {
    path: '/curriculum.lecture/:id/:item',
    name: 'curriculum.lecture',
    component: () => curLecture
  },
  {
    path: '/curriculum.quizz/:id/:item',
    name: 'curriculum.quizz',
    component: () => curQuizz
  },
  {
    path: '/curriculum.repetitions/:id/:item',
    name: 'curriculum.repetitions',
    component: () => curRepetitions
  },
  {
    path: '/trainingVideo/:id/:item',
    name: 'trainingVideo',
    component: () => trainingVideo
  }

]

export default routes
