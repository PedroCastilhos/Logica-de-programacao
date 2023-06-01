const prompt = require('prompt-sync')();

const word = prompt('Palavra: ');
const num = Number(prompt('Número: '));
let resposta = ' ';

//console.log(`Palavra: ${word}`);
//console.log(`Número: ${num}`);

for (let i = 0; i < num; i++) {
  resposta = resposta + word + '*';
}

console.log(`${resposta} ${word}`);
