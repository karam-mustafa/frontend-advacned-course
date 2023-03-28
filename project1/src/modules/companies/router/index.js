import ModuleComponent from '../ModuleComponent.vue';

const routes = [
  {
    path: "companies",
    name: "companiesComponent",
    component: ModuleComponent,
    meta: {requiresAuth: true },

  },
];

export default routes;
