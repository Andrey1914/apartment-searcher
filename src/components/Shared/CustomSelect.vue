<template>
    <select v-on="listeners" class="custom-select">
        <option v-for="item in formatedItems" :value="item.value" :key="item.value" :selected="item.selected">
            {{ item.label }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'CustomSelect',
    props: {
        items: {
            type: Array,
            required: true,
        }
    },
    computed: {
        listeners() {
            return {
                ...this.listeners,
                input: event => this.$emit('input', event.target.value)
            }
        },
        formatedItems() {
            return this.items.map(item => {
                return typeof item === 'object' ? item : { value: item, label: item }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.custom-select {
    font-family: 'Montserrat';
    min-height: 40px;
    max-width: 220px;
    width: 100%;
    padding: 8px 15px;
    outline: none;
    line-height: inherit;
    font-size: 18px;
    cursor: pointer;
    border: 2px solid $main-color;
}
</style>