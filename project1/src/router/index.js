import { createRouter, createWebHashHistory } from "vue-router";
import mainRoutes from "./../modules/main/router/index.js";
import store from './../store/index'
const routes = [...mainRoutes];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta?.requiresAuth && store.getters["main/loginInfo"] == null) {
    next({ name: "loginPage" });
  } else {
    next();
  }
});

export default router;
