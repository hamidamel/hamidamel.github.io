import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/developer",
    name: "Developer",
    component: () => import("../views/Developer.vue"),
  },
  {
    path: "/designer",
    name: "Designer",
    component: () => import("../views/Designer.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "menu-active",
  linkExactActiveClass: "menu-exact-active",
});

export default router;
