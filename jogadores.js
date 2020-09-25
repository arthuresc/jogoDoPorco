class Jogadores {
    constructor(num) {
      this.numeroJogador = num;
      this.pontosAtuais = 0;
      this.bancoDePontos = 0;
      this.jogando = false;
    }
    zerar() {
      return (this.pontosAtuais = 0);
    }
    points(value) {
      return (this.pontosAtuais += value);
    }
    addBancoDePontos() {
      this.bancoDePontos += this.pontosAtuais;
      return this.zerar();
    }
}

export default Jogadores;