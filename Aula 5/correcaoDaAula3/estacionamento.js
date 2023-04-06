const prompt = require("prompt-sync")()

const hora1 = Number(prompt("Hora de entrada: "))
const hora2 = Number(prompt("Hora de saída: "))

const cobrar = Math.ceil(hora2 - hora1)
const pagar = cobrar * 5

console.log(`Cobrar: ${cobrar} horas`)
console.log(`Valor R$: ${pagar.toFixed(2)}`)