const cliente = {
    nome: 'André',
    idade: '36',
    cpf: '12312312311',
    email: 'andre@email.com'
}

const chaves = ['nome','idade','cpf','email'];
console.log(cliente[chaves[0]]);

// let nome = 'nome'
// cliente[nome] = 'andre'
// console.log(cliente[nome])

// console.log(cliente['nome'])

chaves.forEach(info => console.log(cliente[info]));
