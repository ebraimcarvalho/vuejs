new Vue ({
  el: '#app',
  data: {
    newgame: false,
    healthPlayer: 100,
    healthMonster: 100,
    logs: [],
    result: '',
    lessPower: {
      min: 4,
      max: 10
    },
    morePower: {
      min: 6,
      max: 12
    }
  },
  computed: {
  
  },
  watch: {

  },
  methods: {
    randomAttack() {
      let lessAttack = this.randomNumber(this.lessPower.min, this.lessPower.max)
      let strongAttack = this.randomNumber(this.morePower.min, this.morePower.max)
      return [lessAttack, strongAttack]
    },
    randomNumber(min, max) {
      return Math.ceil((Math.random() * max) + min)
    },
    addLog(player, monster, mode) {
      if (mode == 'simple') {
        this.logs.unshift(`Jogador atingiu Monstro com ${player}`)
        this.logs.unshift(`Monstro atingiu Jogador com ${monster}`)
      } else {
        this.logs.unshift(`Jogador atingiu Monstro com ${monster}`)
        this.logs.unshift(`Monstro atingiu Jogador com ${player}`)
      }
    },
    playerLoss() {
      this.healthPlayer = 0
      this.result = 'red'
      this.logs.unshift(`Fim de jogo!`)
    },
    playerWin() {
      this.healthMonster = 0
      this.result = 'green'
      this.logs.unshift(`Fim de jogo!`)
    },
    playMove(healthPlayer, healthMonster, mode) {
      let [lessAttack, strongAttack] = this.randomAttack();
      if(healthPlayer <= strongAttack) {
        this.addLog(lessAttack, strongAttack);
        this.playerLoss()
      } else if(healthMonster <= lessAttack) {
        this.addLog(lessAttack, strongAttack);     
        this.playerWin()
      } else {
        if (mode == 'simple') {
          this.healthPlayer -= strongAttack;
          this.healthMonster -= lessAttack;
        } else {
          this.healthMonster -= strongAttack;
          this.healthPlayer -= lessAttack;
        }        
        this.addLog(lessAttack, strongAttack, mode);
      }
    },
    attack() {
      if(this.result) return null
      this.playMove(this.healthPlayer, this.healthMonster, 'simple')      
    },
    attackSpecial() {
      if(this.result) return null
      this.playMove(this.healthPlayer, this.healthMonster, 'special')
    },
    cure() {
      if (this.result) return null;
      let [lessAttack, strongAttack] = this.randomAttack()
      if(this.healthPlayer + strongAttack <= 100) {
        this.healthPlayer += strongAttack
        this.healthPlayer -= lessAttack
        this.logs.unshift(`Jogador recebeu uma cura de ${strongAttack}%`)
        this.logs.unshift(`Monstro atingiu Jogador com ${lessAttack}`)
      } else {
        this.logs.unshift(`Você parece estar muito bem, sua vida é de ${this.healthPlayer}%`)
      }
    },
    giveup() {
      this.newgame = false;
      this.healthPlayer = 100;
      this.healthMonster = 100;
      this.dangerPlayer = false;
      this.dangerMonster = false;
      this.logs = [];
      this.result = '';
    },
  }
})