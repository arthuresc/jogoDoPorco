import Jogadores from './jogadores.js'

const casa = {
  jogadores: [],
  playerRef: 1, //Tratar o valor de player ref
  findPlayer: function (value) {
    if (value <= this.jogadores.length) {
      let index = value;
      const player = this.jogadores.find((p) => p.numeroJogador === index);
      player.jogando = true;
      return player;
    } else {
      this.playerRef = 1;
      return this.findPlayer(this.playerRef);
    }
  },

  changePlayer: function () {
    let confirm = (this.findPlayer(this.playerRef).jogando = false);
    this.playerRef += 1;
    return confirm;
  },

  stopDices: function () {
    const player = this.findPlayer(this.playerRef);
    player.addBancoDePontos();
    return this.changePlayer();

    //colocar visual de que parou
  },

  rodarDados: function () {
    const player = this.findPlayer(this.playerRef);
    let randNum = Math.floor(Math.random() * 6 + 1); //mostrar na tela do dado
    console.log(player, " é o jogador e o valor é de ", randNum);
    if (randNum > 1) {
      return player.points(randNum);
    } else {
      this.changePlayer(); //ta indo certo, mas ele executa qual primeiro? a changePlayer ou a player.zerar? Ou as duas juntas?
      return player.zerar();
    }
    //altera o valor do dado na tela da casa
    //soma automatico pq vai ser rodado direto no banco de pontos atuais do jogador
  },

  criarJogadores: function (num) {
    let int = num; //tratar um numero maximo de jogadores
    for (let i = 1; i <= int; i++) {
      this.jogadores.push(new Jogadores(i));
    }
  },
};

console.log(jogadores)

casa.criarJogadores(6)