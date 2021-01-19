<template>
  <div id="app">
    <h1>Contadores</h1>

<!-- import via main.js (global) -->
    <!-- <contador />
    <contador /> -->
    <Contador />
    <Contador />
    <Contador />

  </div>
</template>

<script>
import Contador from "./Contador.vue"

export default {
  name: 'App', // import local
  components: {
    Contador 
  },
  data() {
    return {
      contador: 0
    }
  }
}
</script>

<style>
  button {
    background-color: tomato;
    border: none;
    border-radius: 5px;
    color: white;
    height: 30px;
    margin-right: 10px;
    outline: none;
    width: 30px;
  }
</style>