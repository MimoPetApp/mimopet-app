export default [
  {
    path: '/obedience',
    name: 'Obedience',
    component: () => import('../../views/obedience/Obedience.vue')
  },
  {
    path: '/meu-perfil/:id/detalhes',
    name: 'UserProfileDetails',
    component: () => import('../../views/userProfileDetails/UserProfileDetails.vue')
  }
]
