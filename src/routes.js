import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import Home from "@/components/pages/homePage"
import About from "@/components/pages/aboutPage"

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
        }
    ]

    
});

export default routers;