//Exercicio 5 b
const prompt = require("prompt-sync")()

const num = [30,20,25,32,42,15,50]
const maior = Number(prompt("Nº: "))
let maiores = []


for (let i = 0; i < num.length; i++) {
    if(num[i] > maior ){        
        maiores.push(num[i])
    }
    
}

console.log(maiores.join(", "))

