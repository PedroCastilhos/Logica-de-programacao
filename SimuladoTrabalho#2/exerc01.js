const prompt = require('prompt-sync')();

const num = Number(prompt('Número: '));
let div = 0;
let conta = 0;

for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    div = div + i + ' ';
    conta = conta + i;
  }
}

console.log(`Número: ${num}`);
console.log(`Divisores: ${div}`);
console.log(`Soma: ${conta}`);
if (conta == num) {
  console.log(`${num} é um número perfeito`);
} else {
  console.log(`${num} NÃO é um número perfeito`);
}
