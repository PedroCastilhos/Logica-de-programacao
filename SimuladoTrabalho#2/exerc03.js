const prompt = require('prompt-sync')();

let not = [];
let x = '';

for (let i = 1; i <= 5; i++) {
  x = prompt(`${i}ª Notícia: `);
  not.push(x);
}

console.log(not);
