

export default [
    { 
        path: '/basics', 
        redirect:'/basics/home',
        children:[
            { 
                path: 'home', 
                component: ()=>import('@/views/basics/home.vue')
             },
        ]
    },
  
]
