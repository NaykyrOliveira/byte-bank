class Cliente {
    nome;
    cpf;
    rg;
    
}

class ContaCorrente {
    agencia;
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
            return
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22211133309;

const ContaCorrenteRicardo = new ContaCorrente();

ContaCorrenteRicardo.agencia = 1001;

ContaCorrenteRicardo.depositar (100);
ContaCorrenteRicardo.depositar (100);
ContaCorrenteRicardo.depositar (100);

const valorSacado = ContaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(ContaCorrenteRicardo);
