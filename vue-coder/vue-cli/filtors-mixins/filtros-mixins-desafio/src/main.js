import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('tamanho', function(valor) {
	// let palavras = valor.split(' ')

	// for(let i = 0; i < palavras.length; i++) {
	// 	let length = palavras[i].length
	// 	palavras[i] = palavras[i] + ` (${length})`
	// }
	// return palavras.join(' ')
	return valor.split(' ').map(p => `${p} (${p.length})`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
