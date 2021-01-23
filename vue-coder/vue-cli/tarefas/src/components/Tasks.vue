<template>
  <div class="container-card" v-if="lista.length">
    <Task 
      v-for="(item, index) in lista"
      :item="item"
      :index="index"
      :done="done"
      :del="del"
      class="card" 
      :class="[{done: item.done}]"
      :style="[{backgroundColor: item.done ? '#67AA5C' : '#E25342'}]"
      :key="index"
    />
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  components: {Task},
  props: ['lista', 'done', 'del']

}
</script>

<style>
.container-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
  justify-content: center;
  width: 90vw;
}

.card {
  border-radius: 10px;
  cursor: pointer;
  height: 140px;
  width: 300px;
}

.card-text {
  font-size: 22px;
  text-align: center;
}
</style>