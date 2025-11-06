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
    component: () => import('@/views/workbench.vue'),
  },
  ...Basics,
]


// 创建一个路由器实例，用于管理页面路由
// 使用createRouter方法，传入包含历史记录配置和路由规则的对象
const router = createRouter({
  // 配置使用Web历史记录模式，根路径为"/"
  history: createWebHistory("/"),

  // 引入路由规则，具体路由规则定义在routes中
  routes,
})


export default router