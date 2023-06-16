const prompt = require("prompt-sync")()

let nome = ''
let gotas = 0
let totalCriancas = 0
let totalGotas = 0

while(true){
    nome = prompt("Nome da criança: ")
    gotas = Number(prompt("Nº de gotas: "))
    console.log(`${nome} vacinado(a) com ${gotas} gotas.`)
    let continua = prompt("Deseja continuar? (S/N)")
    

    totalCriancas = totalCriancas + 1
    totalGotas = totalGotas + gotas
    if (continua.toUpperCase() == "N") {
        break
    }
}

console.log(`Crianças vacinadas ${totalCriancas}`)
console.log(`Total de gotas: ${totalGotas}`)
if (totalGotas >= 60) {
    console.log(`Nº de frascos: ${(totalGotas / 30).toFixed(0)}`)
} else {
    console.log(`Foi gasto 1 frasco para vacinar todas as crianças.`)
}