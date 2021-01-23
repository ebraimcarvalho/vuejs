<template>
	<div id="app">
		<h1>Tarefas</h1>
		<div class="progress-bar">
			<div :style="[{width: progress + '%'}]" class="progress-content"></div>
			<div class="progress">
				<p>{{progress}}%</p>
			</div>
		</div>
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
export default {
	created() {
		console.log('get local storage')
	},
	data() {
		return {
			lista: [],
			input: '',
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
	methods: {
		add() {
			if(!this.input) {
				this.erro = 'Digite uma tarefa para adicionar!'
				this.$refs.inputText.focus()
				return
			}
			this.lista.unshift({
				text: this.input,
				done: false
			})
			this.erro = '';
			this.input = '';
			this.$refs.inputText.focus()
		},
		done(index) {
			this.lista[index].done = !this.lista[index].done
		},
		del(index) {
			this.lista.splice(index, 1)
		},
		setErro() {
			this.erro = ''
		}
	}
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

	.progress-bar {
		border: 1px solid #c1c1c1;
		border-radius: 10px;
		height: 40px;
		margin-bottom: 30px;
		position: relative;
		width: 90%;
	}

	.progress-content {
		height: 40px;
		background-color: rgba(71, 156, 45, 0.842);
	}

	.progress {
		display: flex;
		font-size: 20px;
		justify-content: center;
		position: absolute;
		top: -12px;
		width: 100%;
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
