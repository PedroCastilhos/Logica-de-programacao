const prompt = require("prompt-sync")()

const name = prompt("Qual é o nome do filme? ")
const duration = prompt("Qual é a duração do filme " + name + "? ")

console.log(`A duração do filme ${name} é de ${duration} minutos`)