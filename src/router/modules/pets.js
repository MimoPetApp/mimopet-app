export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../../views/pets/petsList/petsList.vue')
  },
  {
    path: '/pet/:id',
    name: 'petdetails',
    component: () => import('../../views/pets/petProfile/petProfile.vue')
  },
  {
    path: '/novo/pet',
    name: 'petRegister',
    component: () => import('../../views/pets/petRegister/petRegister.vue')
  },
  {
    path: '/detalhes/:petid',
    name: 'training',
    component: () => import('../../views/pets/petTrainning/trainingPet.vue')
  },
  {
    path: '/trainingdetails/:id',
    name: 'trainingDetails',
    component: () => import('../../views/pets/petTrainning/trainningDetails.vue')
  },
  {
    path: '/trainingConfirm/:id',
    name: 'trainingConfirm',
    component: () => import('../../views/pets/petTrainning/confirmSubscription.vue')
  },
  {
    path: '/trainingDetailsAll/:id',
    name: 'trainingDetailsAll',
    component: () => import('../../views/pets/petTrainning/mytrainningDetails.vue')
  },
  {
    path: '/curriculum.article/:id/:item',
    name: 'curriculum.article',
    component: () => import('../../views/pets/petTrainning/curriculum.article.vue')
  },
  {
    path: '/curriculum.lecture/:id/:item',
    name: 'curriculum.lecture',
    component: () => import('../../views/pets/petTrainning/curriculum.lecture.vue')
  },
  {
    path: '/curriculum.quizz/:id/:item',
    name: 'curriculum.quizz',
    component: () => import('../../views/pets/petTrainning/curriculum.quizz.vue')
  },
  {
    path: '/curriculum.repetitions/:id/:item',
    name: 'curriculum.repetitions',
    component: () => import('../../views/pets/petTrainning/curriculum.repetitions.vue')
  },
  {
    path: '/trainingVideo/:id/:item',
    name: 'trainingVideo',
    component: () => import('../../views/pets/petTrainning/trainingvideoFullScreen.vue')
  },
  {
    path: '/trainingFinish/:id',
    name: 'trainingFinish',
    component: () => import('../../views/pets/petTrainning/trainingFinish.vue')
  }
]
