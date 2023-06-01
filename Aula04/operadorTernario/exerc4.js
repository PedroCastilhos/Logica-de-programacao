const prompt = require('prompt-sync')();

const number = Number(prompt('Digite um número inteiro: '));

number % 2 == 1
  ? console.log(`O número ${number} é Ímpar.`)
  : console.log(`O número ${number} é Par.`);
