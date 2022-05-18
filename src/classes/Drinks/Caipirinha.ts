import Drink from "../Drink";
import Batido from "../MetodoPreparo/Batido";
import Longdrink from "../MetodoServir/Longdrink";

export default class Caipirinha extends Drink {
  nome = "Caipirinha";

  constructor() {
    super();
    console.log("Criada caipirinha;");
    this.setMetodoPreparo(new Batido());
    console.log("Definido o modo de preparo;");
    this.setMetodoServir(new Longdrink());
  }
}
