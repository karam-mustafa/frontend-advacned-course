import ModuleComponent from "../ModuleComponent.vue";

const routes = [
  {
    path: "admins",
    name: "adminsComponent",
    component: ModuleComponent,
    meta: { requiresAuth: true },
  },
];

export default routes;
