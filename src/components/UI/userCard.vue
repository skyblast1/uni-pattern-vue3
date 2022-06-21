<template>
    <div class="card">
        <div v-if="img" class="card-img__wrapper">
            <img class="card-img" :src="img" :title="title">
        </div>
        <span class="card-name">{{name}}</span>
        <span class="card-title">{{title}}</span>
        <div class="card-body">
            <slot></slot>
            <div class="">
                <router-link :to="`/${alias}`" class="link">More</router-link>
            </div>
        </div>
    </div>
    
</template>

<script>

export default{
    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        img: {
            type: String
        },
        alias: {
            type: String
        } 
    }
}

</script>