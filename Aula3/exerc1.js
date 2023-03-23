const prompt = require("prompt-sync")()

const product = prompt("Qual é o nome do produto? ")
const valor = Number(prompt("Qual é o valor dos produtos? "))

console.log(`A ${product} sairá por R$${Math.floor(valor)}.`)