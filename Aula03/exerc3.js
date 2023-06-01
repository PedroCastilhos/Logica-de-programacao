const prompt = require("prompt-sync")()

const entrada = Number(prompt("Horário de entrada: "))
const saida = Number(prompt("Horário de saída: "))

const cobrar = Math.ceil(saida - entrada) * 5

console.log(`A reserva durou ${Math.ceil(saida - entrada)} e o valor a ser pago é de ${cobrar}`)

