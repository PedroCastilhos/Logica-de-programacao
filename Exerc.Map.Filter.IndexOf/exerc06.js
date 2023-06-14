const prompt = require('prompt-sync')();

const frutas = [4, 12, 20, 30, 15, 18];
let media = 0;

for (let i = 0; i < frutas.length; i++) {
  media = media + frutas[i];
}

console.log(`A soma é ${media}`);
console.log(`A média é ${media / frutas.length}`);
