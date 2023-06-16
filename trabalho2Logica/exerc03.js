const prompt = require("prompt-sync")()

let disciplina = []
let conceito = []
let x = ""
let y = ""

while(true){
    x = prompt("Disciplina: ")
    y = prompt("Conceito: ")
    

    disciplina.push(x)
    conceito.push(y)
    
    let continua = prompt("Deseja continuar? (S/N)")
    if (continua.toUpperCase() == "N") {
        break
    }


}

const escolhido = prompt("Qual conceito filtrar: ")

console.log(`Disciplinas com ${escolhido}`)

for (let i = 0; i < disciplina.length; i++) {    
    if (conceito[i] == escolhido) {
        console.log(`${disciplina[i]}`)
    }    
}

console.log("-".repeat(20))

console.log(`Outras disciplinas`)
for (let i = 0; i < disciplina.length; i++) {    
    if (conceito[i] != escolhido) {
        console.log(`${disciplina[i]} - ${conceito[i]}`)}    
}

