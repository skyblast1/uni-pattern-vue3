import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import Home from "@/pages/homePage";
import About from "@/pages/aboutPage";

const routers = createRouter({
    history: routerHistory,
    routes: [
        {
            path:"/",
            component: Home,
        },
        {
            path:"/about",
            component: About,
        },
    ]

    
});

export default routers;