const prompt = require('prompt-sync')();

let nome = [];
let idade = [];
let x = [];
let y = [];
let chegadaVelhos = [];
let chegadaNovos = [];

while (true) {
  x = prompt('Nome: ');
  y = Number(prompt('Idade: '));

  if (x == 'fim') {
    break;
  }

  nome.push(x);
  idade.push(y);
}

for (let i = 0; i < nome.length; i++) {
  if (idade[i] >= 60) {
    chegadaVelhos.push(nome[i]);
  } else {
    chegadaNovos.push(nome[i]);
  }
}

console.log(chegadaVelhos);
console.log(chegadaNovos);
