<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpf | cpf | inverter }}</p>
		<hr>
		<p>{{ nome | inverter }}</p>
		<input type="text" v-model="nome">
		<hr>
		<Frutas />
		<hr>
		<div>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
    </ul>
    <input type="text" v-model="fruta" @keyup.enter="add">
  </div>
	</div>
</template>

<script>
import Frutas from './Frutas.vue'
import frutasMixin from './frutasMixin'
export default {
  mixins: [frutasMixin],
	components: { Frutas },
	filters: {
		cpf(valor) {
			// const arr = valor.split('')
			// arr.splice(3,0,'.')
			// arr.splice(7,0,'.')
			// arr.splice(11,0,'-')
			// return arr.join('')
			return valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
		}
	},
	data() {
		return {
			cpf: '98700933460',
			nome: 'Ebraim',
			frutas: ['só uma']
		}
	},
	methods: {
		troca(n) {
			this.nome = n
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
