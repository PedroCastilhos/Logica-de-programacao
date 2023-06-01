const prompt = require('prompt-sync')();

const name = prompt('Nome do produto: ');
const price = Number(prompt('Preco do produto: '));

if (price > 100) {
  console.log(
    `Produto: ${name}\nPreco R$${price}\nPode pagar em 3x de R$${(
      price / 3
    ).toFixed(0)}.`
  );
} else {
  console.log(`Produto: ${name}\nPreco R$${price}\nPagamento somente à vista.`);
}
