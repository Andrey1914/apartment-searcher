<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- <button v-on="listeners" v-bind:type="type" :class="{ btn: true, 'btn--outlined': outlined }"> -->
    <button v-bind:type="type" :class="{ btn: true, 'btn--outlined': outlined }">
        <slot></slot>
    </button>
</template>

<script>




export default {
    name: "SubmitButton",
    props: {
        type: {
            type: String,
            default: 'button',
        },
        outlined: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    font-family: 'Montserrat';
    font-size: 18px;
    cursor: pointer;
    display: inline-block;
    min-width: 220px;
    padding: 8px 15px;
    border: 1px solid transparent;
    background: #ff662d;
    color: #ffffff;

    &--outlined {
        background: none;
        border: 1px solid #ff662d;
        color: #ff662d;
    }
}
</style>