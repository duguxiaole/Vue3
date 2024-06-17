import { createMemoryHistory, createRouter } from 'vue-router'

import BasicsNewFirst from '@/pages/basics/new-first.vue'

const routes = [
  { path: '/about', component: BasicsNewFirst },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router