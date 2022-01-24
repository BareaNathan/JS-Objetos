const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '12312312311',
    email: 'andre@email.com',
    fones: ['123123123', '234234234'],
    dependentes: [
        {
            nome: 'Sara',
            parentesco: 'Filha',
            dataNasc: '20/03/2011'
        },
        {
            nome: 'Samia Maria',
            parentesco: 'Filha',
            dataNasc: '04/01/2014'
        }
    ],
    saldo: 100,

    depositar:function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)