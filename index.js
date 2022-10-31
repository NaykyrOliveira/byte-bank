import { Cliente} from "./Cliente.js";
import { ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 22211133309);

const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
ContaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente1);

ContaCorrenteRicardo.transferir(200, conta2);

console.log(cliente2.cpf);
