const prompt = require('prompt-sync')();

const num = Number(prompt('Número: '));
let divisores = 0;

for (let i = 0; i <= num; i++) {
  if (num % i == 0) {
    divisores = divisores + i + ' ';
  }
}

console.log(divisores);
