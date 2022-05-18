import IMetodoPreparo from "./IMetodoPreparo";

export default class UnknownPreparo implements IMetodoPreparo {
  prepare() {
    console.log("Drink sem método de preparo definido.");
  }
}
