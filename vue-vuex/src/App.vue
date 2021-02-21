<template>
  <div id="app">
    <v-app>
      <user-info />
    </v-app>
  </div>

</template>

<script>
import UserInfo from '@/components/UserInfo.vue';

export default {
  name: 'App',
  components: { UserInfo },
}
</script>

<style>

</style>
