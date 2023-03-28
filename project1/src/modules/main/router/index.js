import ModuleComponent from "../ModuleComponent.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import adminsRoutes from "./../../admins/router/index";
import usersRoutes from "./../../users/router/index";
import companiesRoutes from "./../../companies/router/index";

const routes = [
  {
    path: "/",
    name: "home",
    component: ModuleComponent,
    children: [
      ...usersRoutes,
      ...companiesRoutes,
      ...adminsRoutes,
      {
        path: "/login",
        name: "loginPage",
        component: LoginPage,
      },
      {
        path: "/register",
        name: "registerPage",
        component: RegisterPage,
      },
    ],
  },
];
export default routes;
