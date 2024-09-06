import { createWebHistory, createRouter } from 'vue-router'

import Basics from './basics/index.js'

const routes = [
    {
        path: '/', 
        redirect: '/workBench',
    },
    {
        path: '/workBench', 
        // 路由懒加载
        component: ()=>import('@/views/workbench.vue'),
    },
    ...Basics,
]

const router = createRouter({
  history: createWebHistory("/"),
  routes,
})


export default router