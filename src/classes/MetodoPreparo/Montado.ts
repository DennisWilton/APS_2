import IMetodoPreparo from "./IMetodoPreparo";

export default class Montado implements IMetodoPreparo {
  prepare() {
    console.log("Montando o drink...");
  }
}
