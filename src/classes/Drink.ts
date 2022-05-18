import IMetodoPreparo from "./MetodoPreparo/IMetodoPreparo";
import IMetodoServir from "./MetodoServir/IMetodoServir";
import UnknownPreparo from "./MetodoPreparo/UnknownPreparo";
import UnknownServir from "./MetodoServir/UnknownServir";

export default abstract class Drink {
  abstract nome: string;
  public metodoPreparo: IMetodoPreparo;
  public metodoServir: IMetodoServir;

  constructor() {
    this.metodoPreparo = new UnknownPreparo();
    this.metodoServir = new UnknownServir();
  }

  setMetodoPreparo(mp: IMetodoPreparo): void {
    this.metodoPreparo = mp;
  }

  setMetodoServir(ms: IMetodoServir): void {
    this.metodoServir = ms;
  }

  preparar() {
    console.log(`Preparando um ${this.nome}!`);
    this.metodoPreparo.prepare();
  }

  servir() {
    this.metodoServir.servir();
    console.log("Saúde!");
  }
}
