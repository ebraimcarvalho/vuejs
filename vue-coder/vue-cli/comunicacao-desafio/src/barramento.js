import Vue from 'vue';
export default new Vue({
  methods: {
    setUser(user) {
      this.$emit('UserChange', user)
    },
    getUSer(callback) {
      this.$on('UserChange', callback)
    }
  }
});