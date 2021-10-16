export default [
  {
    path: '/meu-perfil',
    name: 'UserProfile',
    component: () => import('../../views/userProfile/UserProfile.vue')
  },
  {
    path: '/meu-perfil/:id/detalhes',
    name: 'UserProfileDetails',
    component: () => import('../../views/userProfileDetails/UserProfileDetails.vue')
  }
]
