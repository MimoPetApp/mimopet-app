export default [
  {
    path: '/behavior',
    name: 'behaviorList',
    component: () => import('../../views/training/behaviorList/behaviorList.vue')
  },
  {
    path: '/behavior/:id',
    name: 'behaviorDetails',
    component: () => import('../../views/training/behaviorDetails/behaviorDetails.vue')
  },
  {
    path: '/treinamentos',
    name: 'TrainingList',
    children: [
      {
        path: ':id/detalhes',
        name: 'TrainingDetails',
        component: () => import('../../views/training/trainingDetails/TrainingDetails.vue')
      }
    ],
    component: () => import('../../views/training/trainingList/trainingList.vue')
  },
  {
    path: '/treinamentos/:id/detalhes',
    name: 'TrainingDetails',
    component: () => import('../../views/training/trainingDetails/TrainingDetails.vue')
  }
]
