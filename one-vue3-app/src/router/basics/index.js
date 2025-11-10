export default [
  {
    path: '/basics',
    redirect: '/basics/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/basics/index.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/basics/home.vue')
      },
      {
        path: 'project',
        component: () => import('@/views/basics/project-directory-structure.vue')
      }
    ]
  },
]
