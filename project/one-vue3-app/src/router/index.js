import { createMemoryHistory, createRouter } from 'vue-router'

import BasicsHome from '@/pages/basics/home.vue'

const routes = [
    {path: '/', component: BasicsHome},
  { path: '/home', component: BasicsHome },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router