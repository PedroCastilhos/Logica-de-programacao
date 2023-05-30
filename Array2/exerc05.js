//Elaborar um programa que leia um número. Informe se ele é ou não é um Número Primo.
const prompt = require('prompt-sync')();

const num = Number(prompt('Número: '));
let np = [];

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    np.push(i);
  }
}

console.log('-'.repeat(20));

console.log(`Os números divisores desse número são ${np}`);

if (np.length > 2) {
  console.log(`${num} não é primo!`);
} else {
  console.log(`É primo!`);
}
