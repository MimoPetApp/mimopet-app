export default [
  {
    path: '/comportamentos',
    name: 'behaviorList',
    component: () => import('../../views/training/behaviorList/behaviorList.vue')
  },
  {
    path: '/comportamentos/:id',
    name: 'behaviorDetails',
    component: () => import('../../views/training/behaviorDetails/behaviorDetails.vue')
  },
  {
    path: '/treinamentos',
    name: 'TrainingList',
    component: () => import('../../views/training/trainingList/trainingList.vue')
  },
  {
    path: '/treinamentos/:id/detalhes',
    name: 'TrainingDetails',
    component: () => import('../../views/training/trainingDetails/TrainingDetails.vue')
  },
  {
    path: '/treinamentos/:id/detalhes/:idModule/sessoes',
    name: 'ModuleDetails',
    component: () => import('../../views/training/moduleDetails/ModuleDetails.vue')
  },
  {
    path: '/treinamentos/:id/slide',
    name: 'SlideStep',
    component: () => import('../../views/training/slideStep/SlideStep.vue')
  }
]
