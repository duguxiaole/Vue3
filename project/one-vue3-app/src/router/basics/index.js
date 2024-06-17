

export default [
    { 
        path: '/basics', 
        redirect:'/basics/home',
        children:[
            { 
                path: 'home', 
                component: ()=>import('@/pages/basics/home.vue')
             },
        ]
    },
  
]
