new Vue ({
  el: '#app',
  data: {
    newgame: false,
    logs: false,
    healthPlayer: 10,
    healthMonster: 30,
    dangerPlayer: false,
    dangerMonster: true,
    color: {
      backgroundColor: 'red'
    }
  },
  computed: {
  
  },
  watch: {

  },
  methods: {
    giveup() {
      this.newgame = false;
      this.logs = false;
      this.healthPlayer = 100;
      this.healthMonster = 100;
    },
    change() {
      // this.dangerPlayer = true
    }
  }
})