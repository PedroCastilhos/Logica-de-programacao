const prompt = require("prompt-sync")()

const nomes = []
const notas = []

console.log("Informa o nome do aluno ou 'Fim' para sair. ")
// Repete enquanto verdade (ou seja, para sempre)
// No caso, até encontrar um break(que sai do laço de repetição)
while (true){
    const x = prompt("Nome: ")
    if (x.toUpperCase() == "FIM") {
        break
    } 
    const y = Number(prompt("Nota: "))

    //adiciona nomes e notas aos vetores
    nomes.push(x)
    notas.push(y)
}

console.log("\nLista de aprovados!")
for (let i = 0; i < nomes.length; i++) {
    if (notas[i] >= 7) {
        console.log(`${nomes[i]} com ${notas[i]} pontos!`)
    } else {
        console.log(`Reprovado!`)
        console.log(`${nomes[i]} com ${notas[i]} pontos!`)
    }
    
}

