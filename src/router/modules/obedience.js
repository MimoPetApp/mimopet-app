export default [
  {
    path: '/obedience',
    name: 'Obedience',
    component: () => import('../../views/obedience/list/Obedience.vue')
  },
  {
    path: '/obedience/:id/detalhes',
    name: 'ObedienceDetails',
    component: () => import('../../views/obedience/details/ObedienceDetails.vue')
  }
]
