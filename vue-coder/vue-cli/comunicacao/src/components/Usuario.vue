<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>{{ title }}</p>
    <p>Usuário tem <strong>{{idade}} anos</strong></p>
    <button @click="alterarNome">Alterar nome</button>
    <hr />
    <div class="componentes">
      <app-usuario-info 
        @mudou="trataEvento($event)"
        :title="title"
        :reiniciarFN="reiniciarNome"
        :idade="idade"
      />
      <app-usuario-editar 
        :idade="idade" 
        @idadeMudou="idade = $event"
        :idadecallback="idadecallback"
      />
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";
import barramento from '@/barramento'

export default {
  
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      title: "Props Teste",
      idade: 21,
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
    reiniciarNome(item) {
      this.title = 'Props Teste'
      console.log(item)
    },
    idadecallback() {
      console.log('dale')
      this.idade = 33
    }
  },
  created() {
    // barramento.$on('idadeMudou', incremento => {
    //   this.idade += incremento
    // })
    barramento.quandoIdadeMudar(inc => {
      this.idade += inc
    })
  }
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
