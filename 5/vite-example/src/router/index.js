import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from './../views/HomeView.vue';
import CardsView from './../views/CardsView.vue';
import CreateCardView from './../views/CreateCardView.vue';
import EditCardView from './../views/EditCardView.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cards",
    name: "cards",
    component: CardsView,
  },
  {
    path: "/create",
    name: "createCard",
    component: CreateCardView,
  },
  {
    path: "/edit",
    name: "editCard",
    component: EditCardView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
