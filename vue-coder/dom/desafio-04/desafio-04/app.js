new Vue({
	el: '#desafio',
	data: {
		changeClass: 'destaque',
		perigo: true,
		classe3: '',
		classe4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px'
		},
		width: '0',
	},
	computed: {
		
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.changeClass = this.changeClass == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 5;
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500)
		},
		setPerigo(e) {
			return this.perigo = e.target.value == 'true' ? true : false;
		}
	}
})
