import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

// Funcionaio
const diretor = new Diretor("Rodrigo", 10000, 12345678912);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 12345678913);
gerente.cadastrarSenha("987654321");
// Cliente
const cliente = new Cliente("Manuel Gomes", 12345678920, "14789632");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "987654321");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "14789632");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);


