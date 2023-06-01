const prompt = require("prompt-sync")()

const movie = prompt("Nome do filme: ")
const duration = prompt("Duração do filme em minutos: ")

console.log(`O filme ${movie} tem a duração de ${duration} minutos`)

const hour = duration / 60
const minutes = duration % 60

console.log(`O filme ${movie} tem a duração de ${hour.toFixed(0)} horas e ${minutes} minutos.`)

