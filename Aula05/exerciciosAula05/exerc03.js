//um lado não pode ser mair que a soma dos outros dois 
const prompt = require('prompt-sync')();

const a = Number(prompt("Lado A: "))
const b = Number(prompt("Lado B: "))
const c = Number(prompt("Lado C: "))

if (a + b > c && a + c > b && b + c > a) {
    console.log("Estes lados formam um triangulo!")   
    if (a == b && a == c && c == b) {
        console.log("Este triangulo possui todos os lados iguais  é um Equilátero!") }
    if (a != b && a != c && b != c ) {
        console.log("Este triangulo possui todos os lados diferente e é um Escaleno!")
    } else {
        console.log("Este triangulo possui dois lados iguais e é um Isóceles!")
    }           
} else {
    console.log("Estes lados não completam um triangulo.")
}
