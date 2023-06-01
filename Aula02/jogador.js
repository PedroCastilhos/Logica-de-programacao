const prompt = require("prompt-sync")()

const name = prompt("Qual é o nome do jogador? ")
const number = prompt("Qual é o número do jogador" + name + "? ")

console.log(`O jogador ${name} tem o número ${number} na camisa`)