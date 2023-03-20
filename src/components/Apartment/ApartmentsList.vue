<template>
    <div class="apartments-list">
        <ApartmentsItem v-for="{ id, description, rating, imgUrl, price } in items" :key="id" :description="description"
            :rating="rating" :imgSrc="imgUrl" :price="price" class="apartments-list__item" />
    </div>
</template>

<script>
import ApartmentsItem from './ApartmentsItem.vue';

export default {
    name: "ApartmentsList",
    props: {
        items: {
            type: Array,
            default: () => [],
        }
    },
    components: { ApartmentsItem }
}
</script>

<style lang="scss" scoped>
.apartments-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;

    &__item {
        margin-bottom: 30px;
    }
}
</style>