<template>
    <header class="header">
        <Container>
            <Logo />
        </Container>
    </header>
</template>

<script>
import Container from './Shared/Container.vue';
import Logo from './Logo.vue';
export default {
    name: 'AppHeader',
    components: {
        Container,
        Logo
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: $secondary-color;
    /* height: 30px; */
    padding: 16px 0;
}
</style>