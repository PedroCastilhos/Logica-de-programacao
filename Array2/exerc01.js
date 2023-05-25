const prompt = require('prompt-sync')();

const nome = []
const homem = []
const mulher = []

 

while (true){
    const x = prompt("Nome: ")    

    if(x.toUpperCase() == "FIM"){
        break
    }

    nome.push(x)
}

for (let i = 0; i < nome.length; i++) {
    if (i % 2 == 0) {
        homem.push(nome[i])
    } else {
        mulher.push(nome[i])
    }
    
}

console.log("-".repeat(10))
console.log(`Homens: `)
console.log(homem)
console.log("-".repeat(10))
console.log(`Mulheres:`)
console.log(mulher)
console.log("-".repeat(10))