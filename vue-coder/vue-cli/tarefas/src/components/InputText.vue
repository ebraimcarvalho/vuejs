<template>
  <div class="inputArea">
    <input 
      ref="inputText" 
      type="text" 
      placeholder="Nova tarefa?" 
      v-model="input"
      @input="setErro"
      @keyup.enter="add" 
    />
    <button @click="add">+</button>
  </div>
</template>

<script>
import barramento from '@/barramento'

export default {
  data() {
    return {
      input: '',
    }
  },
  methods: {
    add() {
			if(!this.input) {
        barramento.addErro('Digite uma tarefa para adicionar!');
				this.$refs.inputText.focus();
				return
      }
      
      barramento.addTask(this.input)
			this.erro = '';
			this.input = '';
			this.$refs.inputText.focus()
    },
    setErro() {
			barramento.addErro('')
		}
  }
}
</script>

<style>
.inputArea{
  display: flex;
  position: relative;
}

.inputArea input {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid #c1c1c1;
  border-radius: 10px;
  color: white;
  font-size: 22px;
  height: 35px;
  padding: 5px 10px;
  outline: none;
  width: 400px;
}

.inputArea button {
  background-color: rgb(58, 94, 211);
  border: none;
  border-radius: 0px 10px 10px 0px;
  color: white;
  cursor: pointer;
  font-size: 22px;
  height: 45px;
  margin-top: 2px;
  padding: 5px 10px;
  position: absolute;
  outline: none;
  right: 2px;
  top: -1px;
}
</style>