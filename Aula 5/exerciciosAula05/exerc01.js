const prompt = require('prompt-sync')();

const nome = prompt('Nome: ');
const sexo = prompt('Sexo: (M = Masculino e F = Feminimo) ');
const peso = Number(prompt('Peso: '));
const altura = Number(prompt('Altura: '));

if (sexo == 'M' || sexo == 'm') {
  console.log(`Nome: ${nome}`);
  console.log(`Sexo(M/F): ${sexo}`);
  console.log(`Altura: ${altura}`);
  console.log(`Seu peso: ${peso}`);
  console.log(`Esse deve ser seu peso ideal: ${peso * altura - 58}`);
} else {
  console.log(`Nome: ${nome}`);
  console.log(`Sexo(M/F): ${sexo}`);
  console.log(`Altura: ${altura}`);
  console.log(`Seu peso: ${peso}`);
  console.log(`Esse deve ser seu peso ideal: ${peso * altura - 44.7}`);
}
