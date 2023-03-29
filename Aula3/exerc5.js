const prompt = require('prompt-sync')();

const distance = Number(prompt('Qual a distância percorrida em metros? '));

const km = distance / 1000;

const metros = distance % 1000;

console.log(
  `A distância percorrida ${distance}\nEquivale a ${km}km e ${metros}m.`
);
