import IMetodoServir from "./IMetodoServir";

export default class TacaMartini implements IMetodoServir {
  servir() {
    console.log("Drink servido em uma taça de Martini.");
  }
}
