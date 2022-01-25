function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    // this.depositar = function (valor) {
    //     this.saldo += valor
    // }
}

ClientePoupanca.prototype.depositar = function(valor){
    this.saldo += valor
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePoupanca('Ju','23423423422','email@ju.com',100,500)


ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

ju.depositarPoup(500)
ju.depositar(100);
console.log(ju)