export default [
  {
    path: '',
    name: 'hub',
    component: () => import('../../views/auth/hub/getStarted.vue')
  },
  {
    path: 'criar',
    name: 'criar',
    component: () => import('../../views/auth/register/createAccount.vue')
  },
  {
    path: 'acesso',
    name: 'acesso',
    component: () => import('../../views/auth/login/loginAccount.vue')
  }
]
