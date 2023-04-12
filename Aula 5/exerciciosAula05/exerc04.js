const prompt = require('prompt-sync')();

const horas = Number(prompt('Horário no Brasil: '));

const franca = horas + 5;

console.log(`Hora no Brasil: ${horas}h`);

if (franca > 24) {
  console.log(`Horas na França: ${franca % 24}h`);
} else {
  console.log(`Horas na França: ${franca}h`);
}
