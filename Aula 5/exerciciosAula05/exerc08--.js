const prompt = require('prompt-sync')();

const valor = Number(prompt('Valor depositado: '));

switch (valor) {
  case (valor = '1'):
    console.log('Permanência: 30min');
    console.log('Troco R$: 0.00');
    break;
  case valor >= '1.75':
    console.log('Permanência: 60min');
    console.log(`Troco R$: ${valor - 1.75}`);
    break;
  case valor <= '3':
    console.log('Permanência: 120min');
    console.log(`Troco R$: ${valor - 3}`);
    break;
  default:
    console.log('Houve um equívoco');
    break;
}
