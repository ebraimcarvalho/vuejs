<template>
  <div id="app">
    <h1>PDF Reader</h1>
    <input @change="previewFiles" type="file" name="pdfFile" id="pdfFile">
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    async previewFiles(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = function() {
        const lines = reader.result.split('\n')
        console.log(lines)
      }
      reader.readAsText(file)
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
