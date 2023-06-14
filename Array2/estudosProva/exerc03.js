const prompt = require('prompt-sync')();

const nome = [];
const acertos = [];
let x = '';
let y = '';

while (true) {
  x = prompt('Nome: ');
  y = Number(prompt('Acertos: '));

  if (x.toUpperCase() == 'FIM') {
    break;
  }

  nome.push(x);
  acertos.push(y);
}

const minimo = prompt('Acertos minímos: ');
console.log(nome);
console.log(acertos);
console.log(minimo);
