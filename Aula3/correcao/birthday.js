const prompt = require("prompt-sync")()

const nome = prompt("Qual é o seu nome? ")

const idade = Number(prompt("Qual a sua idade? "))

const question = prompt("Você já fez aniversário esse ano, Sim ou Não?")

let anoNasc

if (question == "Sim" || question == "sim" || question == "s") {
    anoNasc = 2023 - idade
} else {
    anoNasc = 2022 - idade
}


console.log(`${nome} nasceu em ${anoNasc}`)