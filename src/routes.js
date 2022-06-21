import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import Home from "@/components/pages/homePage"
import About from "@/components/pages/aboutPage"
// import notFoundPage from '@/components/pages/404Page'
import itemPage from '@/components/pages/itemPage'

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path:"/",
            component: Home
        },
        {
            path:"/about",
            component: About
        },
        {
            path: '/:itemAlias',
            name: 'itemAlias',
            component: itemPage
        },
        // {
        //     path: '/:CatchAll(.*)',
        //     name: 404,
        //     component: notFoundPage
        // }
    ]

    
});

export default routers;