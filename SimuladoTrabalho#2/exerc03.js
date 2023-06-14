const prompt = require('prompt-sync')();

let not = [];
let x = '';
let y = [];

for (let i = 1; i <= 5; i++) {
  x = prompt(`${i}ª Notícia: `);
  not.push(x);
}

const quant = Number(prompt('Nº de notícias: '));

for (let i = quant + 1; i < not.length; i++) {
  console.log('Notícias selecionadas ' + not[i]);
  y.push(not[i]);
}
let yInvertido = y.reverse();
console.log(yInvertido);
