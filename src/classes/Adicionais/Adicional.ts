import Drink from "../Drink";

export default abstract class Adicional extends Drink {
  abstract nome: string;
  drink: Drink;

  constructor(drink: Drink) {
    super();
    this.drink = drink;
  }

  servir() {
    this.drink.servir();
  }

  preparar() {
    this.drink.preparar();
  }
}
