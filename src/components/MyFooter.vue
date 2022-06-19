<template>
    <div class="footer">
        <div class="container">
            <ul class="navbar-list">
                <li class="navbar-item" v-for="link in links" :key="link.alias">
                    <router-link class="navbar-link" :to="link.url">{{link.link}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import { links } from '@/_config';


export default{
    data() {
        return {
            links: links,
        }
    }
};

</script>