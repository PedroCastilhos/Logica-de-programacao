const prompt = require("prompt-sync")()

let name = prompt("Qual é o seu nome? ")
let age = Number(prompt("Qual é a sua idade? "))
 
const year = 2023 - age

console.log(`O ${name} tem ${age} e nasceu em ${year}.`)
