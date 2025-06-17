import { createRouter, createWebHistory } from "vue-router";
import Edit from "../views/Edit.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/edit/:id", component: Edit },
  { path: "/", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
