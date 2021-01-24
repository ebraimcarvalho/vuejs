<template>
  <div>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
    </ul>
    <input type="text" v-model="fruta" @keyup.enter="add">
  </div>
</template>

<script>
import frutasMixin from './frutasMixin'
export default {
  mixins: [frutasMixin],
  // data() {
  //   return {
  //     frutas: ['abacate', 'laranja', 'maçã'],
  //     fruta: ''
  //   }
  // },
  // methods: {
  //   add(v) {
  //     console.log('add fruta', v)
  //     this.frutas.push(this.fruta)
  //   }
  // }
}
</script>

<style>

</style>