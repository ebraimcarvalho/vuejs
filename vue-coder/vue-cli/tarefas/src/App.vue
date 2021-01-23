<template>
	<div id="app">
		<h1>Tarefas</h1>

		<Progressbar :progress="progress" />

		<InputText />

		<div class="erro">
			<p>{{erro}}</p>
		</div>
		<div class="container-card" v-if="lista.length">
			<div 
				class="card" 
				:class="[{done: item.done}]"
				:style="[{backgroundColor: item.done ? '#67AA5C' : '#E25342'}]"
				v-for="(item, index) in lista" 
				:key="index"
			>
				<div class="card-flex" v-if="item">
					<p class="close"><span @click="del(index)">X</span></p>
					<p @click="done(index)" class="card-text">{{item.text}}</p>
				</div>
			</div>
		</div>
		<div v-else>
			<p>Sua vida está em dia :)</p>
		</div>
	</div>
</template>

<script>
import barramento from '@/barramento'

import Progressbar from './components/Progressbar.vue'
import InputText from './components/InputText.vue'

export default {
	components: {Progressbar, InputText},
	created() {
		const json = localStorage.getItem('tasks')
		this.lista = JSON.parse(json) || []

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
				done: false
			})
			this.erro = ''
		})

		barramento.getErro(erro => {
			this.erro = erro
		})
	},
	data() {
		return {
			lista: [],
			erro: '',
		}
	},
	computed: {
		progress() {
			let feitos = this.lista.filter(item => item.done)
			let percent = feitos.length / this.lista.length * 100
			return Math.round(percent) || 0
		}
	},
	watch: {
		lista: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.lista))
			}
		}
	},
	methods: {
		done(index) {
			this.lista[index].done = !this.lista[index].done
		},
		del(index) {
			this.lista.splice(index, 1)
		},
	},
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
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

	.erro{
		color: rgb(231, 41, 41);
		font-size: 20px;
	}

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
