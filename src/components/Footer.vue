<template>
    <footer class="footer">
        <p class="footer__text">
            Created by
            <a class="footer__link" href="https://github.com/Andrey1914">
                <img src="../assets/svg/github.svg" class="footer__svg" />
            </a>
        </p>
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
    background: $secondary;
    /* height: 30px; */
    padding: 15px 0;
    color: $copyright;

    &__text {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__link {
        text-decoration: none;
    }

    &__svg {
        margin-left: 5px;
        color: $icon;
    }
}
</style>