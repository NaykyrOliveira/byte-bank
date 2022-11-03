import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaEmpresarial } from "./ContaEmpresarial.js";
import {ContaPoupanca} from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
const contaEmpresarial = new ContaEmpresarial(cliente1);

contaEmpresarial.depositar(100);
contaEmpresarial.sacar(10);

console.log(contaEmpresarial);

