const cliente = [
    {
        nome: 'André',
        cpf: '12312312311',
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
    },
    {
        nome: 'Juliana',
        cpf: '56767867867',
        dependentes:[{
            nome: 'Sophia',
            parentesco: 'filha',
            dataNasc: '30/08/2020',
        }],
    }
]

const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]

console.table(listaDependentes)