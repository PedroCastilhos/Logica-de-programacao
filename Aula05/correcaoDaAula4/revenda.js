const prompt = require('prompt-sync')();

const modelo = prompt("Modelo do veículo: ")
const marca = prompt("Marca: ")
const preco = Number(prompt("Preço R$: "))

let desconto

if (marca == "Fiat") {
    desconto = preco * 0.1    
} else {
     desconto = preco * 0.2    
}

const precoFinal = preco - desconto
console.log(`Desconto R$: ${desconto.toFixed(2)}`)
console.log(`Preço a vista R$: ${precoFinal.toFixed(2)}`)
