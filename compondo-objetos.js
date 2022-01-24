const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '12312312311',
    email: 'andre@email.com',
    fones: ['123123123','234234234']
}

cliente.dependentes = {
    nome:'Sara',
    parentesco:'Filha',
    dataNasc:'20/03/2011'
}

// console.log(cliente)

cliente.dependentes.nome = "Sara Silva";
console.log(cliente);
