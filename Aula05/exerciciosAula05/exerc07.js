const prompt = require('prompt-sync')();

const velocidadePermitida = Number(prompt('Velocidade permitida: '));
const velocidadeAtual = Number(prompt('Velocidade na estrada: '));

let limite = velocidadePermitida * 0.2 + velocidadePermitida;
console.log(limite);

if (velocidadeAtual <= velocidadePermitida) {
  console.log('Sem multa.');
} else if (velocidadeAtual <= limite) {
  console.log('Multa leve.');
} else if (velocidadeAtual > limite) {
  console.log('Multa grave.');
}
