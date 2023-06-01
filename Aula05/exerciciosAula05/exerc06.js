const prompt = require('prompt-sync')();

const n1 = Number(prompt('Digite um número: '));

let n2 = n1 + 1;

if (n2 % 2 === 1) {
  console.log(`O próximo número par é ${n2 + 1}.`);
} else {
  console.log(`O próximo número par é ${n2}.`);
}
