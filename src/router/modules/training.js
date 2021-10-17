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
    path: '/treinamentos/:id/detalhes/:idModulo/sessoes',
    name: 'ModuleDetails',
    component: () => import('../../views/training/moduleDetails/ModuleDetails.vue')
  },
  {
    path: '/treinamentos/:id/detalhes/:idModulo/sessoes/:idSessao/slide',
    name: 'SlideStep',
    component: () => import('../../views/training/slideStep/SlideStep.vue')
  },
  {
    path: '/treinamentos/:id/detalhes/:idModulo/sessoes/:idSessao/video',
    name: 'VideoStep',
    component: () => import('../../views/training/videoStep/VideoStep.vue')
  },
  {
    path: '/treinamentos/:id/detalhes/:idModulo/sessoes/:idSessao/quiz',
    name: 'QuizStep',
    component: () => import('../../views/training/quizStep/QuizStep.vue')
  },
  {
    path: '/treinamentos/:id/detalhes/:idModulo/sessoes/:idSessao/feedback',
    name: 'FeedbackStep',
    component: () => import('../../views/training/feedbackStep/FeedbackStep.vue')
  },
  {
    path: '/treinamentos/:id/detalhes/:idModulo/sessoes/:idSessao/exercise',
    name: 'ExerciseStep',
    component: () => import('../../views/training/exerciseStep/ExerciseStep.vue')
  }
]
