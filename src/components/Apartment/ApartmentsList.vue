<template>
    <ApartmentContainer>
        <slot name="title"></slot>
        <div class="apartments-list">
            <template v-for="apartment in items">
                <slot name="apartment" v-bind:apartment="apartment"></slot>
            </template>
        </div>
    </ApartmentContainer>
</template>

<script>
import ApartmentContainer from '../Shared/Container.vue'

export default {
    name: "ApartmentsList",
    props: {
        items: {
            type: Array,
            default: () => [],
        }
    },
    components: {
        ApartmentContainer
    }
}
</script>

<style lang="scss" scoped>
.apartments-list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}
</style>