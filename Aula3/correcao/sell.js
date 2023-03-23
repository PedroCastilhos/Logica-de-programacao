const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor do veículo R$: "))

const entrada = valor / 2

const parcela = entrada / 12

console.log(`Entrada de R$: ${entrada.toFixed(2)}\n+ 12 parcelas de R$: ${parcela.toFixed(2)}`)