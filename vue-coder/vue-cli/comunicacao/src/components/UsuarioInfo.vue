<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>{{ title }}</p>
    <p>{{ inverternome() }}</p>
    <button @click="reiniciarNome">Reiniciar nome</button>
    <button @click="reiniciarFN('reseeeet')">Resetar Nome (Callback)</button>
    <p>Idade do usuário é <strong>{{idade}}</strong></p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    reiniciarFN: Function,
    idade: Number,
  },
  methods: {
    inverternome() {
      return this.title.split("").reverse().join("");
    },
    reiniciarNome() {
      const antigo = this.title
      // this.title = "Ebra"
      this.$emit('mudou', {
        novo: 'Ebra',
        antigo
      })
    }
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
