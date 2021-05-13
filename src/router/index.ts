import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MainLayout from "../layouts/MainPage.vue";
import ListPage from "../views/ListPage.vue";
import IdentityPage from "../views/IdentityPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "MainLayout",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "List",
        component: ListPage
      },
      {
        path: "/:address",
        name: "Identity",
        component: IdentityPage
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/testing",
    name: "Testing",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Testing.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
