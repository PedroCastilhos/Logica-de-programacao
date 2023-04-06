const prompt = require('prompt-sync')();

const ovos = Number(prompt("Quantidade de Ovos: "))

const duzias = Math.floor(ovos/12)
const sobra = ovos % 12

console.log(`N° de caixas (dúzias): ${duzias}`)
console.log(`Sobrabam: ${sobra} unidades`)
