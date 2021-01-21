<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>Idade do usuário é: <strong>{{idade}}</strong></p>
    <button @click="alterarIdade">Alterar Idade</button>
    <!-- <button @click="idadecallback">Alterar Idade (callback)</button> -->
  </div>
</template>

<script>
import barramento from '@/barramento'
export default {
  props: {
    idade: Number,
    idadecallback: Function,
  },
  methods: {
    alterarIdade() {
      barramento.$emit('idadeMudou', 1)
    }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
