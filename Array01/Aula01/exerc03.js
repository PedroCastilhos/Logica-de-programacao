const prompt = require('prompt-sync')();

const time = [];
const dc = [];
const fc = [];

console.log('Lista de jogos:');

let continua;

do {
  const x = prompt('Time: ');

  time.push(x);

  continua = prompt('Continua (S/N): ').toUpperCase();
} while (continua == 'S');

for (let i = 0; i < time.length; i++) {
  if (i % 2 == 0) {
    dc.push(time[i]);
  } else {
    fc.push(time[i]);
  }
}

console.log(dc);
console.log(fc);

for (let i = 0; i < fc.length; i++) {
  console.log(`${dc[i]} X ${fc[i]}`);
}
