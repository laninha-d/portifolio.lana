class Pessoa {
    

    constructor(nome, foto, idade, sexo, cidade, profissao, escolaridade) {
        this.nome = nome
        this.foto = foto
        this.idade = idade
        this.sexo = sexo
        this.cidade = cidade
        this.profissao = profissao
        this.escolaridade = escolaridade

    }
    apresentar() {
        const apresentacao = `olá, meu nome é ${this.nome},tenho${this.idade}anos, 
    moro na cidade de${this.cidade} e minha profissao ${this.profissao}`
        console.log(apresentacao)
    }

}

const pessoas = []
pessoas.push(new Pessoa('Lana', 'ursinho.png', 20, 'F', ' mairinque', ' Nenhuma Adquirida', ' Completo'))
pessoas.push(new Pessoa('Lana', 'ursinho.png', 20, 'F', ' mairinque', ' Nenhuma Adquirida', ' Completo'))
pessoas.push(new Pessoa('Lana', 'ursinho.png', 20, 'F', ' mairinque', ' Nenhuma Adquirida', ' Completo'))
const cartoesPessoas=document.querySelector('.pessoas')
console.log(pessoas)
pessoas.forEach(pessoa => {
    console.log(pessoa)
    const cartao = document.createElement('div')
    cartao.classList.add('cartao')
    const foto = document.createElement('img')
    foto.classList.add('foto')
    foto.setAttribute('src',pessoa.foto) 
    const nome = document.createElement('h2')
    nome.classList.add('nome')
    nome.textContent= pessoa.nome
    const idade = document.createElement('p')
idade.classList.add('idade')
    idade.textContent= pessoa.idade
    const cidade = document.createElement('p')
    cidade.classList.add('cidade')
    cidade.textContent= pessoa.cidade
    const profissao = document.createElement('p')
    profissao.classList.add('profissao')
    profissao.textContent= pessoa.profissao
    const escolaridade = document.createElement('p')
    escolaridade.classList.add('escolaridade')
    escolaridade.textContent= pessoa.escolaridade
    cartao.appendChild(foto)
    cartao.appendChild(nome)
    cartao.appendChild(idade)
    cartao.appendChild(cidade)
    cartao.appendChild(profissao)
    cartao.appendChild(escolaridade)
    cartoesPessoas.appendChild(cartao)








})


