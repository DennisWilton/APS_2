import Acompanhamento from "./Acompanhamento";

export default class Amendoim extends Acompanhamento {
  servirAcompanhamento() {
    console.log(`Servindo amendoim acompanhando um ${this.drink.nome}`);
  }
}
