import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678912);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 12345678913);
gerente.cadastrarSenha("987654321");

const estaLogado = SistemaAutenticacao.login(gerente, "98765432");

console.log(estaLogado);
