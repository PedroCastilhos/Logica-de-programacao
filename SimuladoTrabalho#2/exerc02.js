const prompt = require('prompt-sync')();

const nf = Number(prompt('Nº de funcionários: '));
let att = nf;

console.log(nf);

for (let i = 0; i < 5; i++) {
  att = att * 2;
  console.log(att);
}

console.log(`Previsão de funcionários para os próximos 5 anos.`);
console.log('-'.repeat(20));
