import IMetodoPreparo from "./IMetodoPreparo";

export default class Batido implements IMetodoPreparo {
  prepare() {
    console.log("Batendo o drink...");
  }
}
