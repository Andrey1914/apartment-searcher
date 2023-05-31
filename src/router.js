import { createRouter, createWebHistory } from "vue-router";

import Foo from "./pages/Foo.vue";
import Bar from "./pages/Bar.vue";
import Apartment from "./pages/Apartment.vue";
import HomePage from "./pages/HomePage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import LoginPage from "./pages/Login.vue";

const routes = [
  {
    path: "/foo",
    component: Foo,
  },
  {
    path: "/bar",
    component: Bar,
  },
  {
    path: "/",
    component: HomePage,
    name: "home-page",
  },
  {
    path: "/apartments/:id",
    component: Apartment,
    name: "apartment",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
  },
  {
    path: "/*",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
