<template>
    <div class="md-body">
        <h1>Home</h1>
        <div class="card__wrapper">
            <div v-for="item in items" :key="item.id">
                <userCard :name="`${item.lvl} lvl`" :title="item.title">
                {{item.descr}}
                </userCard>
            </div>
        </div>
    </div>
</template>


<script>

import userCard from '@/components/UI/userCard.vue'

export default {
    components: {
        userCard
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: 'Archer',
                    descr: 'description of Archer',
                    lvl: 4
                },
                {
                    id: 2,
                    title: 'Wizard',
                    descr: 'description of Wizard!!!',
                    lvl: 4
                }
            ]
        }
    }
}

</script>