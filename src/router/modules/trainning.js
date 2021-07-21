export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../../views/pets/petsList/petsList.vue')
  },
  {
    path: '/detalhes/:id',
    name: 'detalhes',
    props: true,
    component: () => import('../../views/pets/petTrainning/trainningDetails.vue')
  },
  {
    path: '/detalhes/inscricao',
    name: 'inscricao',
    component: () => import('../../views/pets/petTrainning/mytrainningDetails.vue')
  },
  {
    path: '/detalhes/inscricao/videos',
    name: 'videos',
    component: () => import('../../views/pets/petTrainning/mytrainningVideo')
  }
]
