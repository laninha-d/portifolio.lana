const botaoCalcular = document.querySelector('.botao-calcular')
botaoCalcular.onclick = calcular
window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        botaoCalcular.click()
    }
})

function calcular() {
    const peso = document.querySelector('.input-kg')
    const altura = document.querySelector('.input-metros')
    const imc = peso.value / (altura.value ** 2)
    console.log(imc)
    const imcTag = document.querySelector('.resultado__num')
    imcTag.textContent = `imc: ${imc.toFixed(2)}`
    const imctext= document.querySelector('.resultado__texto')
    if (imc < 18.5) {
        imctext.style.textContent= ' abaixo do peso'
        imctext.style.color = 'red'
    } else if (imc > 18.5 && imc < 24.9) {
        imctext.style.textContent= 'peso ideal'
        imctext.style.color = 'green'
    } else if (re > 25 && res < 29.9) {
        imctext.style.textContent= 'sobre peso'
        imctext.style.color ='yellow'
    } else if (re > 30 && res < 34.9) {
        imctext.style.textContent= 'obesiade grau 1'
        imctext.style.color = ' yellow '
    } else if (re > 35 && res < 39.9) {
        imctext.style.textContent= 'obesidae grau 2'
        imctext.style.color ='red'
    }
    else {
        imctext.style.textContent= 'obesidae grau 3'
        imctext.style.color = 'red'
    }
    peso.value = ''
    altura.value = ''
    peso.focus()
    
}