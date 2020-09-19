import Vue from 'vue'
import VueRouter from 'vue-router'
import Basic from '@/pages/basic.vue'
import NotFound from '@/pages/404.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/basic',
        component: Basic
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
  routes,
});

export default router