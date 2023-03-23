const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor do Jantar R$: "))

const taxa = valor * 0.10

const total = valor + taxa 

console.log(`Taxa do garçom R$: ${taxa.toFixed(2)}`)
console.log(`Total a pagar R$: ${total.toFixed(2)}`)
