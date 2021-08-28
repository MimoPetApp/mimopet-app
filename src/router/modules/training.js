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
    path: '/training',
    name: 'trainingList',
    component: () => import('../../views/training/trainingList/trainingList.vue')
  }
]
