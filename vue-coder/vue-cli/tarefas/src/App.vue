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
				@keyup.enter="add" 
			/>
			<button @click="add">+</button>
		</div>
		<div class="container-card" v-if="lista.length">
			<div class="card" v-for="(item, index) in lista" :key="index">
				<div v-if="item">
					<p @click="del(index)">fechar</p>
					<p @click="done(index)" :class="[{done: item.done}]">{{item.text}} - {{index}} / {{item.done ? 'Feito' : 'Pendencia'}}</p>
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
	data() {
		return {
			lista: [{
				text: 'Fazer compras',
				done: false
			}],
			input: '',
		}
	},
	computed: {
		progress() {
			let feitos = this.lista.filter(item => item.done)
			let percent = feitos.length / this.lista.length * 100
			return Math.round(percent)
		}
	},
	methods: {
		add() {
			this.lista.unshift({
				text: this.input,
				done: false
			})
			this.input = '';
			this.$refs.inputText.focus()
		},
		done(index) {
			this.lista[index].done = !this.lista[index].done
		},
		del(index) {
			this.lista.splice(index, 1)
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
	}

	.inputArea input {
		background-color: transparent;
		border: 1px solid #c1c1c1;
		border-radius: 10px;
		color: white;
		font-size: 22px;
		padding: 5px 10px;
		outline: none;
		width: 300px;
	}

	.inputArea button {
		align-content: center;
		background-color: rgb(58, 94, 211);
		border: none;
		border-radius: 0px 10px 10px 0px;
		color: white;
		cursor: pointer;
		display: flex;
		font-size: 22px;
		height: 90%;
		justify-content: center;
		left: -34px;
		padding: 5px 10px;
		position: relative;
		outline: none;
		top: 2px;
	}

	.done {
		text-decoration: line-through;
	}

	.container-card {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 90vw;
	}

	.card {
		background-color: red;
		width: 200px;
	}

</style>
