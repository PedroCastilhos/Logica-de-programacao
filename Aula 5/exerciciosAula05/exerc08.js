const prompt = require('prompt-sync')();

const valor = Number(prompt('Valor depositado: '));

if (valor <1){
  console.log("Valor insuficiente")
} else if (valor <1.75){
  console.log("Tempo: 30 min")
  troco = valor -1
} else if (valor < 3.00){
  console.log("Tempo: 60min")
  troco = valor - 1.75
} else {
  console.log("Tempo: 120 min")
  troco = valor - 3.00
}

if (troco != 0) {
  console.log(`Troco R$: ${troco.toFixed(2)}`)
}