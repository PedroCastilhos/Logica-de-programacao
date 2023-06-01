const prompt = require('prompt-sync')();

const eggs = Number(prompt('Quantos ovos? '));

const box = eggs / 12;

const rest = eggs % 12;

console.log(
  `Quantidade e ovos: ${eggs}\nNúmero de Caixas (dúzias): ${box.toFixed(
    0
  )}\n Sobraram: ${rest}unidade(s)`
);
