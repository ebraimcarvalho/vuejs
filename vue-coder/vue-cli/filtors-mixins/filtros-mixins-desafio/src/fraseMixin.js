export default {
  computed: {
    troca2() {
      return this.frase.replace(/\s/g, ',')
    },
    tamanho2() {
      return this.frase.split(' ').map(p => `${p} (${p.length})`).join(' ')
    }
  }
}