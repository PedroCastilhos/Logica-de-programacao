const prompt = require('prompt-sync')();

const destino = prompt("Destino: ")
const dias = Number(prompt("Nº de dias: "))
const horas = Number(prompt("Nº de horas: "))

const total = (dias * 24) + horas

console.log(`A viagem para ${destino} dura no total ${total} horas.`)