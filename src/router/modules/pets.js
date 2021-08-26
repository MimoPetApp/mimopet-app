export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../../views/pets/petsList/petsList.vue')
  },
  {
    path: '/pet/:id',
    name: 'PetProfile',
    component: () => import('../../views/pets/petProfile/PetProfile.vue')
  },
  {
    path: '/novo/pet',
    name: 'PetRegister',
    component: () => import('../../views/pets/petRegister/PetRegister.vue')
  }
]
