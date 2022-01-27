class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoupanca(valor){
        this.saldoPoup += valor
    }
}

const andre = new ClientePoupanca('andre','andre@email.com','12312312311',100,150);

andre.depositar(100);
andre.depositarPoupanca(100);

console.log(andre)