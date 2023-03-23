const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

const anterior = num - 1
const posterior = num + 1

console.log(`Vizinhos: ${anterior} e ${posterior }`)

// outra forma, calculando direto na resposta 

console.log(`Vizinhos: ${num - 1} e ${num + 1}`)