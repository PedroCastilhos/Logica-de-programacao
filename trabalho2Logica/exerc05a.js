//Exercicio 5 A
const prompt = require("prompt-sync")()

const num = [10,13,25,36,42,45,50]
let calculo = 0
let metade = []

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        calculo = num[i] / 2
        metade.push(calculo)
    } else {
        calculo = Math.ceil(num[i] /2)        
        metade.push(calculo)
    }    
}

console.log(metade.join(", "))

console.log("-".repeat(20))