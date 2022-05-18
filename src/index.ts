import Canudo from "./classes/Adicionais/Canudo";
import Caipirinha from "./classes/Drinks/Caipirinha";
import Cosmopolitan from "./classes/Drinks/Cosmopolitan";
import GinTonica from "./classes/Drinks/GinTonica";
import Amendoim from "./classes/Acompanhamentos/Amendoim";
import Acompanhamento from "./classes/Acompanhamentos/Acompanhamento";
import Guardanapo from "./classes/Adicionais/Guardanapo";

// const comanda = [
//   { bebida: Caipirinha, acompanhamentos: [Amendoim], adicionais: [] },
//   { bebida: Caipirinha, acompanhamentos: [], adicionais: [Canudo] },
//   { bebida: GinTonica, acompanhamentos: [], adicionais: [] },
//   {
//     bebida: Cosmopolitan,
//     acompanhamentos: [Amendoim],
//     adicionais: [Guardanapo]
//   }
// ];

// comanda.forEach((pedido) => {
//   let drink = new pedido.bebida();

//   pedido.acompanhamentos.forEach((Acompanhamento) => {
//     drink = new Acompanhamento(drink);
//   });

//   pedido.adicionais.forEach((Adicional) => {
//     drink = new Adicional(drink);
//   });
//   drink.preparar();
//   drink.servir();

//   // drink.preparar();
//   if (drink instanceof Acompanhamento) {
//     drink.servirAcompanhamento();
//   }
//   // drink.servir();

//   console.log();
// });

let drink = new Amendoim(new Canudo(new Caipirinha()));

drink.preparar();
drink.servir();

if (drink.possuiAcompanhamento) {
  drink.servirAcompanhamento();
}

console.log();
