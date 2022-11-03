import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaEmpresarial } from "./Conta/ContaEmpresarial.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
const contaEmpresarial = new ContaEmpresarial(cliente1);

contaEmpresarial.depositar(100);
contaEmpresarial.sacar(10);

console.log(contaEmpresarial);

