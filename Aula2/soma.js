// O programa deve ler dois números e mostrar a soma deles.

const prompt = require("prompt-sync")()

const number1 = Number(prompt("Primeiro número: "))
const number2 = Number(prompt("Segundo número: "))

console.log(`A soma entre ${number1} e ${number2} é de ${number1 + number2}.`)