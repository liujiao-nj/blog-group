import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/basic",
    component: () => import("@/pages/basic.vue"),
  },
  {
    path: "*",
    component: () => import("@/pages/404.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router