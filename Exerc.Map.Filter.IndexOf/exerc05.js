const prompt = require('prompt-sync')();

const valor = [40000, 50000, 32000, 6000, 45000];

for (let i = 0; i < valor.length; i++) {
  console.log(`${valor[i] * 0.3}`);
}
