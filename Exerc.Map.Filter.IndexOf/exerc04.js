const prompt = require('prompt-sync')();

const salario = [2300, 3000, 1900, 4500, 2550, 2800];
let maiores = [];

const minimo = Number(prompt('Valor mínimo: '));

for (let i = 0; i < salario.length; i++) {
  if (salario[i] >= minimo) {
    maiores.push(salario[i]);
  }
}

console.log(maiores);
