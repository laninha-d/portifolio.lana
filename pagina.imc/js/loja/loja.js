class Produto {
    constructor(titulo, preco, descricao, categoria, imagem, quantidade) {
        this.titulo = titulo
        this.preco = preco
        this.descricao = descricao
        this.categoria = categoria
        this.imagem = imagem
        this.quantidade = quantidade
    }
}

const produtos = []

fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {

        json.forEach(item => {

            const produto = new Produto(
                item.title,
                item.price,
                item.description,
                item.category,
                item.image,
                item.rating.count,
            )

            produtos.push(produto)
        })
        const cartoesProdutos=document.querySelector('.produto');
        console.log(produto)
        cartao.classList.add('cartao')
        const imagem= document.createElement('imagem')
        imagem.classList.add('imagem')
        imagem.setAttribute('src',produto.imagem) 
        const titulo = document.createElement('h2')
        titulo.classList.add('titulo')
        titulo.textContent= produto.titulo
        const descricao = document.createElement('p')
    descricao.classList.add('descricao')
        descricao.textContent= produto.descricao
        const categoria = document.createElement('p')
        categoria.classList.add('categoria')
        categoria.textContent= produto.categoria
        const quantidade = document.createElement('p')
        quantidade.classList.add('quantidade')
        quantidade.textContent= produto.quantidade
        cartao.appendChild(imagem)
        cartao.appendChild(titulo)
        cartao.appendChild(descricao)
        cartao.appendChild(categoria)
        cartao.appendChild(quantidade)
        cartaoProduto.appendChild(cartao)

    })


function atualizarHTML(){
    console.log('HTML atualizado');
}

 