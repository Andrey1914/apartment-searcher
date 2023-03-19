<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <Btn>Click me</Btn> -->
  <Title></Title>
  <h1>{{ title }}</h1>
  <Button @click="increment">Click me +</Button>
  <Button @click="decrement" outlined>Click me -</Button>
</template>

<script>
// import Btn from "./components/Button.js"
import Title from "./components/Title.vue"
import Button from "./components/Button.vue"


export default {
  name: 'App',
  components: {
    // Btn,
    Title,
    Button
  },
  data() {
    return {
      amountOfClicks: 0
    }
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`
    }
  },
  methods: {
    increment() {
      this.amountOfClicks += 1
    },
    decrement() {
      this.amountOfClicks -= 1
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
