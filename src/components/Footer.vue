<template>
    <footer class="footer">
        <p class="footer__text">Created by ?</p>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.footer {
    background: $secondary-color;
    /* height: 30px; */
    padding: 15px 0;

    &__text {
        text-align: center;
        color: #fff;
    }
}
</style>