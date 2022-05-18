import IMetodoServir from "./IMetodoServir";

export default class Longdrink implements IMetodoServir {
  servir() {
    console.log("Drink servido em um LongDrink.");
  }
}
