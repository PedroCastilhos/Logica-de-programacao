const prompt = require("prompt-sync")()

let bill = Number(prompt("Qual é o valor da conta? "))
let finalValor = (bill * 10) / 100

console.log(`O valor da conta a ser paga contando com os 10% do garçom ficou por ${finalValor + bill} reais`)