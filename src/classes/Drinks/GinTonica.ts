import Drink from "../Drink";
import Montado from "../MetodoPreparo/Montado";
import TacaGin from "../MetodoServir/TacaGin";

export default class GinTonica extends Drink {
  nome = "Gin Tonica";

  constructor() {
    super();
    this.setMetodoPreparo(new Montado());
    this.setMetodoServir(new TacaGin());
  }
}
