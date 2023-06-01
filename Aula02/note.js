const prompt = require("prompt-sync")()

let note1 = Number(prompt("Qual é a nota da primeira avaliação?"))
let note2 = Number(prompt("Qual é a nota da segunda avaliação?"))

console.log(`A média do estudante é de ${(note1 + note2) / 2} pontos.`)