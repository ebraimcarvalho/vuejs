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
  methods: {
    randomAttack() {
      let lessAttack = this.randomNumber(this.lessPower.min, this.lessPower.max)
      let strongAttack = this.randomNumber(this.morePower.min, this.morePower.max)
      return [lessAttack, strongAttack]
    },
    randomNumber(min, max) {
      return Math.ceil((Math.random() * max) + min)
    },
    addLog(player, monster) {
      this.logs.unshift(`Monstro atingiu Jogador com ${player}`)
      this.logs.unshift(`Jogador atingiu Monstro com ${monster}`)
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
    attack() {
      if(this.result) return null
      let [lessAttack, strongAttack] = this.randomAttack();
      if(this.healthPlayer <= strongAttack) {
        this.addLog(lessAttack, strongAttack);
        this.playerLoss()
      } else if(this.healthMonster <= lessAttack) {
        this.addLog(lessAttack, strongAttack);     
        this.playerWin()
      } else {
        this.healthPlayer -= strongAttack;
        this.healthMonster -= lessAttack;    
        this.addLog(strongAttack, lessAttack);
      }
    },
    attackSpecial() {
      if(this.result) return null
      let [lessAttack, strongAttack] = this.randomAttack();
      if(this.healthMonster <= strongAttack) {
        this.addLog(strongAttack, lessAttack);
        this.playerWin()
      } else if(this.healthPlayer <= lessAttack) {
        this.addLog(strongAttack, lessAttack);     
        this.playerLoss()
      } else {
        this.healthMonster -= strongAttack;
        this.healthPlayer -= lessAttack;    
        this.addLog(lessAttack, strongAttack);
      }
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