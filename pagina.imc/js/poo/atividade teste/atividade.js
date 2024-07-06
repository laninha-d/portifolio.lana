class Cidade {


    constructor(nome, foto, estado, pais, datadefundacao, numerodehabitantes) {
        this.nome = nome
        this.foto = foto
        this.estado = estado
        this.pais = pais
        this.datadefundacao = datadefundacao
        this.numerodehabitantes = numerodehabitantes
    }
}

const cidades = []
cidades.push(new Cidade('Salvador', 'salvador.png', 'Estado:bahia', 'Pais:bahia', ' fundação:29 de marco', ' Hab:2 417 678'))
cidades.push(new Cidade('São paulo', 'sp.png', ' Estado:sao paulo', ' Pais:brasil', ' Fundação:25 de janeiro','Hab:11 451 99'))
cidades.push(new Cidade('Fortaleza', 'fortaleza.png', 'Estado:ceara', 'Pais:ceara', 'Fundação:13 de abril','Hab:2 428 678 '))
cidades.push(new Cidade('Curitiba', 'curitiba.png', 'Estado:parana', 'Pais:parana', ' Fundação: 29 de março','Hab:1 773 718 hab.'))
const cartaocidades = document.querySelector('.cidades')
cidades.forEach(cidade=> {
    const cartao = document.createElement('div')
    cartao.classList.add('cartao')
    const foto = document.createElement('img')
    foto.classList.add('foto')
    foto.setAttribute('src', cidade.foto)
    const estado = document.createElement('p')
    estado.classList.add('estado')
    estado.textContent = cidade.estado
    const nome = document.createElement('h2')
    nome.classList.add('nome')
    nome.textContent= cidade.nome
    const pais = document.createElement('p')
    pais.classList.add('pais')
    pais.textContent = cidade.pais
    const datadefundacao = document.createElement('p')
    datadefundacao.classList.add('datadefundacao')
    datadefundacao.textContent= cidade.datadefundacao
    const numerodehabitantes = document.createElement('p')
    numerodehabitantes.classList.add('numerodehabitantes')
    numerodehabitantes.textContent = cidade.numerodehabitantes
    cartao.appendChild(foto)
    cartao.appendChild(nome)
    cartao.appendChild(pais)
    cartao.appendChild(estado)
    cartao.appendChild(numerodehabitantes)
    cartao.appendChild(datadefundacao)
    cartaocidades.appendChild(cartao)


})