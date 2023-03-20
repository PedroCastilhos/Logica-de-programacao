const prompt = require("prompt-sync")()

let number = Number(prompt("Qual número você escolhe para ver os seus vizinhos? "))
let neighborhood1 = number + 1
let neighborhood2 = number - 1

console.log(`Os números vizinhos do ${number} é ${neighborhood2} e ${neighborhood1}.`)
