const prompt = require('prompt-sync')();

const nome = prompt("Nome do aluno: ")
const anoNasc = Number(prompt("Ano do nascimento: "))

const idade = 2023 - anoNasc
console.log(`Idade: ${idade} anos`)

if (idade >= 18) {
    console.log(`${nome}, você é maior de idade.`)
    
} else {
    console.log(`${nome}, você é menor de idade.`)
}