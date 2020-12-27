new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    openAlert() {
      alert("Dale");
		},
		keyDown(e) {
			this.valor = e.target.value
		}
  },
});
