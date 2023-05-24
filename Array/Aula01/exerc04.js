const prompt = require('prompt-sync')();

const vec = [];
const valor = [];
const frete = Number(prompt('Frete: '));

let continua;

do {
  const x = prompt('Veículo: ');
  const y = Number(prompt('Valor: '));

  vec.push(x);
  valor.push(y);

  continua = prompt('Continua (S/N): ').toUpperCase();
} while (continua == 'S');

for (let i = 0; i < vec.length; i++) {
  console.log(`${vec[i]} : ${valor[i] + frete}`);
}
