const prompt = require('prompt-sync')();

const produto = prompt("Produto: ")
const preco = Number(prompt("Preco R$: "))

if (preco < 100) {
    console.log("Pagamento somenta à vista.")
    
} else {
    const parcela = preco / 3
    console.log(`Pode pagar em 3x de R$: ${parcela.ToFixed(2)}`)
}