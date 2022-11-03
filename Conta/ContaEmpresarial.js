import {Conta} from "./Conta.js";

export class ContaEmpresarial extends Conta {
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
    }

    sacar(valor) {
        const taxa = 1.25;
        return this._sacar(valor, taxa);
    }
}