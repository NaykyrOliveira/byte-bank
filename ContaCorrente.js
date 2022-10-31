export class ContaCorrente {
    agencia;
    cliente;

    /* https://github.com/tc39/proposal-class-fields#private-fields */
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}