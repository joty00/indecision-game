<script>
import Indecision from "./components/Indecision.vue";

export default {
  name: 'App',
  components: {
    Indecision,
  }
}
</script>

<template>
  <header>
    <Indecision />
  </header>
</template>

<style>
  #app {
    text-align: center;
    margin-top: 60px;
    color: #2c3e50;
  }

  html, body {
    background-color: black;
  }
</style>
