//Elaborar um programa que leia um número. Exiba todos os divisores deste número.
const prompt = require('prompt-sync')();

const num = Number(prompt('Número: '));
let resposta = ' ';

console.log(`Os números divisores de ${num}:`);

for (let i = 0; i <= num; i++) {
  if (num % i == 0) {
    resposta = resposta + i + ' ';
  }
}

console.log(resposta);
