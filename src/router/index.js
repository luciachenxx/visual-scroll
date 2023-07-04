import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: '/',
        component: ()=>import('@/views/Index.vue'),
    },
    {   path: '/about', 
        name: '/about',
        component: ()=>import('@/views/About.vue') 
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;
