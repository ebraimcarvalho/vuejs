<template>
  <div id="contador">
    <p>{{contador}}</p>
    <button @click="adicionar">+</button>
    <button @click="diminuir">-</button>

  </div>
</template>

<script>
export default {
  name: 'Contador',
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    adicionar() {
      this.contador++
    },
    diminuir() {
      this.contador--
    }
  }
}
</script>

<style>

</style>