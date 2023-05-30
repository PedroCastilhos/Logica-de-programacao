//6. Elaborar um programa que leia um número e um símbolo. Monte um quadrado, com o símbolo
//repetido no número de colunas e linhas, conforme o exemplo.
const prompt = require('prompt-sync')();

const simbolo = prompt('Símbolo: ');
const num = Number(prompt('Número: '));

for (let i = 1; i <= num; i++) {
  console.log(`${simbolo.repeat(num)}`);
}
