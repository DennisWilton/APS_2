import Drink from "../Drink";
import Adicional from "./Adicional";

export default class GuardaChuva extends Adicional {
  nome: string;

  constructor(drink: Drink) {
    super(drink);
    this.nome = this.drink.nome + " com guarda chuva.";
  }
}
