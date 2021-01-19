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

<style scoped>
  /* button {
    background-color: tomato;
    border: none;
    border-radius: 5px;
    color: white;
    height: 30px;
    margin-right: 10px;
    outline: none;
    width: 30px;
  } */
</style>