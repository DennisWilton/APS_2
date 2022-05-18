import Drink from "../Drink";

export default abstract class Acompanhamento extends Drink {
  drink: Drink;
  abstract nome: string;
  possuiAcompanhamento: boolean = true;

  constructor(drink: Drink) {
    super();
    this.drink = drink;
  }

  abstract servirAcompanhamento(): void;

  servir() {
    this.drink.servir();
  }

  preparar() {
    this.drink.preparar();
  }
}
