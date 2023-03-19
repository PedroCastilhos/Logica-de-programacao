const prompt = require("prompt-sync")()

let fruit = prompt("Qual o nome da fruta? ")
let number = prompt("Qual a quantidade de " + fruit + "colhidas? ")
console.log(`A fruta ${fruit} teve a quantidade de ${number} unidades colhidas.`)