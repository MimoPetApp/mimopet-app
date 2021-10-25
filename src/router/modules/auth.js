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
  },
  {
    path: 'esqueci-senha',
    name: 'ForgetPassword',
    component: () => import('../../views/auth/forgetPassword/ForgetPassword.vue')
  },
  {
    path: 'alterar-senha',
    name: 'ChangePassword',
    component: () => import('../../views/auth/changePassword/ChangePassword.vue')
  },
  {
    path: 'logout',
    name: 'logout',
    component: () => import('../../views/auth/logout/logout.vue')
  }
]
