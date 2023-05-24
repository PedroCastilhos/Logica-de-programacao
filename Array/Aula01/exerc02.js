const prompt = require('prompt-sync')();

const num = [];
let par = 0;

console.log('Lista de números');

let continua;

do {
  const x = prompt('Nº: ');

  num.push(x);

  continua = prompt('Continua (S/N): ').toUpperCase();
} while (continua == 'S');

//for (let i = 0; i < nome.length; i++) {
//  console.log(`${nome[i]} ${nota[i].toFixed(2)}`);
//}

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    console.log(`Pares`);
    console.log(`${num[i]}`);
    par = par + 1;
  }
}

console.log(par);
