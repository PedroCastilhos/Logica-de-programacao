const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Nota do primeiro trismetre: '));
const nota2 = Number(prompt('Nota do segundo trismetre: '));

console.log(`1° trismestre: ${nota1}.`);
console.log(`2° trismestre: ${nota2}.`);
console.log(`Soma das notas ${nota1 + nota2}.`);

if (nota1 + nota2 < 20) {
  console.log('Você está reprovado');
} else if (nota1 + nota2 < 60) {
  console.log(
    `Necessário ${60 - (nota1 + nota2)} pontos no 3° trimestre para aproveção.`
  );
} else {
  console.log(`Parabéns! Você já está aprovado com ${faltante}`);
}
