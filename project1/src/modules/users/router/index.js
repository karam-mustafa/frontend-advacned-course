import ModuleComponent from '../ModuleComponent.vue';

const routes = [
  {
    path: "users",
    name: "usersComponent",
    component: ModuleComponent,
    meta: {requiresAuth: true },
  },
];

export default routes;
