import Drink from "../Drink";
import Adicional from "./Adicional";

export default class Guardanapo extends Adicional {
  nome: string;

  constructor(drink: Drink) {
    super(drink);
    this.nome = this.drink.nome + " com guardanapo";
  }
}
