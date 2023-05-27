<template>
  <div class="content">
    <AppHeader />
    <router-view></router-view>

  </div>
  <AppFooter />
</template>

<script>
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    AppFooter,
    AppHeader
  },
}
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
  padding-top: 120px;
}

/* .apartments-filter {
  margin-bottom: 40px;
} */
</style>
