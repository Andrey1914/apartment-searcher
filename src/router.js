import { createRouter, createWebHistory } from "vue-router";

import Foo from "./pages/Foo.vue";
import Bar from "./pages/Bar.vue";
import Apartment from "./pages/Apartment.vue";
import HomePage from "./pages/HomePage.vue";

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
    path: "/item",
    component: Apartment,
    name: "apartment",
  },
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
