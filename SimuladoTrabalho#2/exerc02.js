const prompt = require('prompt-sync')();

const nf = Number(prompt('Nº de funcionários: '));
let att = nf;

console.log(nf);

for (let i = 0; i < 5; i++) {
  att = att * 2;
  console.log(`Em ${2024 + i}: ${att} funcionários`);
}
