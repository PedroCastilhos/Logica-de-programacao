const prompt = require('prompt-sync')();

let number = Number(prompt("Escolha um número: "))
let raiz = Math.sqrt(number)

if (raiz * raiz == number) {
    console.log(`Número ${number}`)
    console.log(`Raiz quadrada ${raiz}`)
} else {
    console.log(`Número ${number}`)
    console.log(`Este número não possui raiz quadrada!`)
}