<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <Btn>Click me</Btn> -->
  <Title></Title>
  <h1>{{ title }}</h1>
  <Button @click="increment">Click me +</Button>
  <Button @click="decrement" outlined>Click me -</Button>
  <!-- <DirectivesTest /> -->
  <StarRating :rating="4.5" />
</template>

<script>
// import Btn from "./components/Button.js"
import Title from "./components/Title.vue"
import Button from "./components/Button.vue"
// import DirectivesTest from "./components/DirectivesTest.vue"
import StarRating from "./components/StarRating.vue"

export default {
  name: 'App',
  components: {
    // Btn,
    Title,
    Button,
    // DirectivesTest,
    StarRating
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
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
