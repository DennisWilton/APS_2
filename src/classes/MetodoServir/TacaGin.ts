import IMetodoServir from "./IMetodoServir";

export default class TacaGin implements IMetodoServir {
  servir() {
    console.log("Drink servido em um taça de Gin.");
  }
}
