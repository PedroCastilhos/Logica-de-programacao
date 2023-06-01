const prompt = require('prompt-sync')();

const metros = Number(prompt("Distância em metros:  "))

const km = Math.floor(metros/1000)
const sobra = metros % 1000

console.log(`Distância: ${km} KM e ${sobra} MT`)