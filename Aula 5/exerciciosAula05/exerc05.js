const prompt = require('prompt-sync')();

const saque = Number(prompt('Quanto você quer sacar? '));

if (saque % 10 == 0) {
  console.log(`Valor sacado é R$${saque}.`);
} else {
  console.log(`Não é possível sacar ${saque} com notas de R$10.`);
}
