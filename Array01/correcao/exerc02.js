const prompt = require("prompt-sync")()

const numeros = []
let contador = 0

console.log("Informe os números ou 0 para sair")
while (true) {
    const x = Number(prompt("Número: "))
    if (x == 0) {
        break
    }
    numeros.push(x)
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log(numeros[i])
        contador++
    }
    
}

console.log(`${contador} pares na lista!`)