<template>
    <input v-model="text" v-on="listeners" class="custom-input">
</template>

<script>


export default {
    name: 'CustomInput',
    computed: {
        listeners() {
            return {
                ...this.listeners,
                input: event => this.$emit('input', event.target.value)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.custom-input {
    min-height: 40px;
    padding: 8px 15px;
    outline: none;
    line-height: inherit;
    font-size: 18px;
    border: 2px solid $main-color;
}
</style>