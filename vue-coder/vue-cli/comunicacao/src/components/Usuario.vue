<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>{{ title }}</p>
    <button @click="alterarNome">Alterar nome</button>
    <hr />
    <div class="componentes">
      <app-usuario-info 
        @mudou="trataEvento($event)"
        :title="title"
        :reiniciarFN="reiniciarNome"
      />
      <app-usuario-editar />
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      title: "Props Teste",
    };
  },
  methods: {
    alterarNome() {
      this.title = "Ana";
    },
    trataEvento(e) {
      console.log(e)
      this.title = e.novo
    },
    reiniciarNome() {
      this.title = 'Props Teste'
    }
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
