export default [
  {
    path: "/",
    name: "home",
    component: () => import("../../views/pets/petsList/petsList.vue")
  },
  {
    path: "/pet/:id",
    name: "petdetails",
    component: () => import("../../views/pets/petProfile/petProfile.vue")
  },
  {
    path: "/novo/pet",
    name: "petRegister",
    component: () => import("../../views/pets/petRegister/petRegister.vue")
  }
];
