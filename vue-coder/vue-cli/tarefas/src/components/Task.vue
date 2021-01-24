<template>
  <div @click="done(index)" class="card-flex" v-if="item">
    <p class="close"><span @click.prevent="del(index)">X</span></p>
    <p class="card-text">{{item.text}}</p>
  </div>
</template>

<script>
export default {
  props: ['item', 'index', 'done', 'del']

}
</script>

<style>
.close {
  padding-right: 20px;
  text-align: right;
}

.close span {
  background-color: rgba(0, 0, 0, 0.288);
  border-radius: 50%;
  height: 60px;
  padding: 5px 10px;
  width: 60px;
  cursor: pointer;
}

.done .card-text {
  text-decoration: line-through;
}
</style>