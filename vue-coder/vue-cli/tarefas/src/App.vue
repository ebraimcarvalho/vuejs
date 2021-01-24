<template>
  <div id="app">
    <h1>Lista de Tarefas</h1>
    <Progressbar :progress="progress" />
    <InputText />
    <div v-if="erro" class="erro">
      <p>{{ erro }}</p>
    </div>
    <Tasks :lista="lista" v-if="lista.length" :done="done" :del="del" />
    <div v-else>
      <p>Sua vida está em dia :)</p>
    </div>
  </div>
</template>

<script>
import barramento from "@/barramento";

import Progressbar from "./components/Progressbar.vue";
import InputText from "./components/InputText.vue";
import Tasks from "./components/Tasks.vue";

export default {
  components: { Progressbar, InputText, Tasks },
  created() {
    const json = localStorage.getItem("tasks");
    this.lista = JSON.parse(json) || [];

    barramento.getNewTask((item) => {
      // console.log('addtask', item)
      // let sameText = this.lista.filter(item => item.text == item)
      // console.log('sametext', this.lista)
      // if(sameText.length) {
      // 	this.erro = 'Esta tarefa já contém na lista!'
      // 	// this.$refs.inputText.focus()
      // 	return
      // }

      this.lista.unshift({
        text: item,
        done: false,
      });
      this.erro = "";
    });

    barramento.getErro((erro) => {
      this.erro = erro;
    });
  },
  data() {
    return {
      lista: [],
      erro: "",
    };
  },
  computed: {
    progress() {
      let feitos = this.lista.filter((item) => item.done);
      let percent = (feitos.length / this.lista.length) * 100;
      return Math.round(percent) || 0;
    },
  },
  watch: {
    lista: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.lista));
      },
    },
  },
  methods: {
    done(index) {
      this.lista[index].done = !this.lista[index].done;
    },
    del(index) {
      this.lista.splice(index, 1);
    },
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}

.erro {
  color: rgb(231, 41, 41);
  font-size: 20px;
}
</style>
