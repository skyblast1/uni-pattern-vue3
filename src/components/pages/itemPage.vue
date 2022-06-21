<template>
    <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr" />
      <h1 style="color: #ffffff;" class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>

      

      <div>
        <router-link to="/" class="btn btnWhite">Back to home</router-link>
      </div>
    </div>
  </div>
</template>


<script>
import items from '@/seeders/items'

    export default {
        data() {
            return {
                item: null
            }
        },
        created() {
            const alias = this.$route.params.itemAlias
            const item = items.find(el => el.alias === alias)
            console.log(item)
            this.item = item
            
        }
    }
</script>