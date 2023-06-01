const prompt = require('prompt-sync')();

const destino = prompt('Qual é o destino da sua viagem? ');

const dia = Number(prompt('Quantos dias de viagem? '));

const horas = Number(prompt('Quantas horas de viagem? '));

const duracao = dia * 24 + horas;

console.log(`A viagem para ${destino} dura ${duracao} horas.`);
