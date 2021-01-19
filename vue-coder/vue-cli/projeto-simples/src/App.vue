<template>
  <div id="app">
    <h1>Contadores</h1>
    <p>{{contador}}</p>

    <contador /> <!-- import via main.js -->
    <contador />
    <!-- <Contador />
    <Contador />
    <Contador /> -->
  </div>
</template>

<script>
// import Contador from "./Contador.vue"

export default {
  name: 'App',
  // components: {
  //   Contador
  // },
  data() {
    return {
      contador: 0
    }
  }
}
</script>

<style>

</style>