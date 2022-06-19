<template>
    <div class="navbar">
        <div class="container">
            <div class="navbar-content">
                <router-link class="navbar-logo" to="#">{{title}}</router-link>
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link in links" :key="link.alias">
                        <router-link class="navbar-link" :to="link.url">{{link.link}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>

import {links, app} from "@/_config";


export default{
    data() {
        return {
            links: links,
            title: app.title,
        }
    },
};

</script>