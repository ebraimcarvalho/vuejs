import Vue from 'vue'
export default new Vue({
  methods: {
    addTask(text) {
      this.$emit('addTask', text)
    },
    getNewTask(callback) {
      this.$on('addTask', callback)
    },
    addErro(text) {
      this.$emit('addErro', text)
    },
    getErro(callback) {
      this.$on('addErro', callback)
    }
  }
})