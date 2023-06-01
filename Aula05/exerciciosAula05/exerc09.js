const prompt = require('prompt-sync')();

const students = Number(prompt('Número de estudantes: '));

let turmas = students / 30;
let faltantes = students % 30;

if (students % 30 == 0) {
  console.log(`Será preenchida ${turmas} turmas perfeitas.`);
} else {
  console.log(`Faltam ${30 - faltantes} para abrir uma nova turma. `);
}
