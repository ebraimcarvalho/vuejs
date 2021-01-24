export default {
  data() {
    return {
      frutas: ['abacate', 'laranja', 'maçã'],
      fruta: ''
    }
  },
  methods: {
    add(v) {
      console.log('add fruta', v)
      this.frutas.push(this.fruta)
    }
  }
}