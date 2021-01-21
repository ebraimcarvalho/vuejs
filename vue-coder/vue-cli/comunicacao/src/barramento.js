import Vue from 'vue';
export default new Vue({
  methods: {
    alterarIdade(idade) {
      this.$emit('idadeMudar', idade)
    },
    quandoIdadeMudar(callback) {
      this.$on('idadeMudar', callback)
    }
  }
});