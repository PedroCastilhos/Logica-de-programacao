//1. Elaborar um programa que leia 10 nomes de pessoas que irão participar de um encontro. Sabendo
//que os nomes são informados na seguinte ordem: um homem e uma mulher, exiba os participantes
//em 2 grupos: Homens e Mulheres.
const prompt = require('prompt-sync')();

const nome = [];
const homem = [];
const mulher = [];

while (true) {
  const x = prompt('Nome: ');

  if (x.toUpperCase() == 'FIM') {
    break;
  }

  nome.push(x);
}

for (let i = 0; i < nome.length; i++) {
  if (i % 2 == 0) {
    homem.push(nome[i]);
  } else {
    mulher.push(nome[i]);
  }
}

console.log('-'.repeat(10));
console.log(`Homens: `);
console.log(homem);
console.log('-'.repeat(10));
console.log(`Mulheres:`);
console.log(mulher);
console.log('-'.repeat(10));
