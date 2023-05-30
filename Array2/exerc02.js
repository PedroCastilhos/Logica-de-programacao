//Elaborar um programa que leia 5 números. Ao final, listar os números e informar se eles estão em
//ordem crescente ou não estão em ordem crescente.
const prompt = require('prompt-sync')();

const num = [];

while (true) {
  const x = Number(prompt('Número: '));

  if (x == 0) {
    break;
  }

  num.push(x);
}

if (num[0] < num[1] && num[1] < num[2] && num[2] < num[3] && num[3] < num[4]) {
  console.log(`Esse array é crescente!`);
} else {
  console.log(`Esse array é decrescente!`);
}
