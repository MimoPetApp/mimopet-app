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
  }

]
