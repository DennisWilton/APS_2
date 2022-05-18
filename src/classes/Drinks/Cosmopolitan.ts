import Drink from "../Drink";
import Batido from "../MetodoPreparo/Batido";
import TacaMartini from "../MetodoServir/TacaMartini";

export default class Cosmopolitan extends Drink {
  nome = "Cosmopolitan";

  constructor() {
    super();
    this.setMetodoPreparo(new Batido());
    this.setMetodoServir(new TacaMartini());
  }
}
