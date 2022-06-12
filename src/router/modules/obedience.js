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
        path: ':id/detalhes',
        name: 'ObedienceDetails',
        component: () => import('../../views/obedience/details/ObedienceDetails.vue')
      }
    ]
  }
]
