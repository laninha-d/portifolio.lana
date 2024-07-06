class Portifolio {
    constructor(telainicial, sobremim, informacoes) {
        this.telainicial = telainicial
        this.sobremim = sobremim
        this.informacoes = informacoes

    }
}
const portifolios = []


json.forEach(item => {
    const portifolio = new portifolio(
        item.telainitial,
        item.aboutme,
        item.information,

    )

    portifolios.push(portifolio)
})
const cartoesPortifolio=document.querySelector('.portifolio');
console.log(portifolio)
cartao.classList.add('cartao')
        const telainicial= document.createElement('tela inicial')
        telainicial.classList.add('tela inicial')
        telainicial.setAttribute('src',portifolio.telainicial) 
        const sobremim = document.createElement('h2')
        sobremim.classList.add('sobre mim')
        sobremim.textContent= portifolio.sobremim
        const informacoes= document.createElement('p')
        informacoes.textContent= portifolio.informacoes
        cartao.appendChild(imagem)
        cartao.appendChild(telainicial)
        cartao.appendChild(sobremim)
        cartao.appendChild(informacoes)
        cartaoPortifolio.appendChild(cartao)
        function atualizarHTML(){
            console.log('HTML atualizado');
        }