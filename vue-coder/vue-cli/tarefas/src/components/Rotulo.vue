<template>
  <label for="">
    {{ nome }}
    <input type="text" :value="value" @input="$emit('input', $event.target.value)">
  </label>
</template>

<script>
export default {
  props: ['value', 'nome']
}
</script>

<style>

</style>