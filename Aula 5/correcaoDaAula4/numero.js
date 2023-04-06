const prompt = require('prompt-sync')();

const num = Number(prompt("Número: "))

if (num % 2 == 0) {
    console.log(`${num} é Par!`)
} else {
    console.log(`${num} é Ímpar!`)
}