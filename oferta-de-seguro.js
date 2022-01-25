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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

// console.log(Object.values(cliente));
// console.log(Object.entries(cliente));
oferecerSeguro(cliente)