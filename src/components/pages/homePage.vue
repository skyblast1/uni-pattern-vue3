<template>
    <div class="md-body">
        <div class="card__wrapper">
            <div v-for="item in items" :key="item.id">
                <userCard :name="`${item.lvl} lvl`" :title="item.title" :img="item.img" :alias="item.alias">
                {{item.descr}}
                </userCard>
            </div>
        </div>
    </div>
</template>


<script>

import userCard from '@/components/UI/userCard'
import items from '@/seeders/items'

export default {
    components: {
        userCard
    },
    data() {
        return {
            items:items
        }
    }
}

</script>