const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor do veículo: "))

const entrada = valor / 2

const pretacoes = entrada / 12

console.log(`O valor da entrada é de ${entrada} e as pretações são 12x de ${pretacoes}R$.`)