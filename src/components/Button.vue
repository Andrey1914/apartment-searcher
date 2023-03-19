<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container__btn">
        <button v-on="listeners" v-bind:type="type" :class="{ btn: true, 'btn--outlined': outlined }">
            <slot></slot>
        </button>
    </div>
</template>

<script>




export default {
    name: "AppButton",
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
.container__btn {
    margin-bottom: 12px;
}

.btn {
    cursor: pointer;
    display: inline-block;
    min-width: 220px;
    padding: 8px 15px;
    border: 1px solid transparent;
    background: #ff662d;
    color: #ffffff;
    font-size: 18px;

    &--outlined {
        background: none;
        border: 1px solid #ff662d;
        color: #ff662d;
    }
}
</style>