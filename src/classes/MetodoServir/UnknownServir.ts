import IMetodoServir from "./IMetodoServir";

export default class UnknownServir implements IMetodoServir {
  servir() {
    console.log("Drink sem maneira de servir definida.");
  }
}
