const prompt = require('prompt-sync')();

const model = prompt('Modelo do carro: ');
const mark = prompt('Marca do carro: ');
const valor = prompt('Valor do carro: ');

if (mark == 'Fiat' || mark == 'fiat' || mark == 'fia') {
  console.log(
    `Modelo: ${model}\nMarca: Fiat\nPreco: R$${valor}\nDesconto: R$${
      valor * 0.1
    }\nPreco à vista: R$${valor - valor * 0.2}`
  );
} else {
  console.log(
    `Modelo: ${model}\nMarca: ${mark}\nPreco: R$${valor}\nDesconto: R$${
      valor * 0.2
    }\nPreco à vista: R$${valor - valor * 0.2}`
  );
}
