export default [
  {
    path: 'obediencia',
    name: 'Obedience',
    component: () => import('../../views/obedience/Obedience.vue'),
    children: [
      {
        path: '',
        name: 'ObedienceList',
        component: () => import('../../views/obedience/list/ObedienceList.vue')
      },
      {
        path: ':obedienceID/detalhes',
        name: 'ObedienceDetails',
        props: true,
        component: () => import('../../views/obedience/details/ObedienceDetails.vue')
      },
      {
        path: ':obedienceID/detalhes/:guia/:exercicioID',
        name: 'ObediencieExercise',
        props: true,
        meta: { isFromObedience: true },
        component: () => import('../../views/training/exerciseStep/ExerciseStep.vue')
      }
    ]
  }
]
