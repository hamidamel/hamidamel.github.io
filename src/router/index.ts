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
  {
    path: "/about",
    name: "About Me",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/education",
    name: "Education",
    component: () => import("../views/Education.vue"),
  },
  {
    path: "/skills",
    name: "Skills",
    component: () => import("../views/Skills.vue"),
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
