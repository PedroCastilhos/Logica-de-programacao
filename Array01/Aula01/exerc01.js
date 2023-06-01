const prompt = require('prompt-sync')();

const nome = [];
const nota = [];

console.log('Lista de nota dos estudantes');

let continua;
let total = 0;

do {
  const x = prompt('Aluno: ');
  const y = Number(prompt('Nota: '));

  nome.push(x);
  nota.push(y);

  continua = prompt('Continua (S/N): ').toUpperCase();
} while (continua == 'S');

for (let i = 0; i < nome.length; i++) {
  console.log(`${nome[i]} ${nota[i].toFixed(2)}`);
}

for (let i = 0; i < nota.length; i++) {
  if (nota[i] >= 7) {
    console.log(`Aprovados`);
    console.log(`${nome[i]} ${nota[i].toFixed(2)}`);
  } else {
    console.log(`Reprovados`);
    console.log(`${nome[i]} ${nota[i].toFixed(2)}`);
  }
}
