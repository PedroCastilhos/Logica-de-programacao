const prompt = require("prompt-sync")()

const city1 = prompt("Qual é o nome da cidade de origem? ")
const city2 = prompt("Qual é o nome da cidade de destino? ")
const distance = prompt("Qual é a distância entre elas? ")

console.log(`A distância entre ${city1} e ${city2} é de ${distance}KM.`)