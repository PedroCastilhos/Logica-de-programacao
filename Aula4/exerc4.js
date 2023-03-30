const prompt = require('prompt-sync')();

const number = Number(prompt('Digite um número inteiro: '));

if (number % 2 == 1) {
  console.log(`O número ${number} é Ímpar.`);
} else {
  console.log(`O número ${number} é Par.`);
}
