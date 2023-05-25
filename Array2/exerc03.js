const prompt = require('prompt-sync')();

const nome = []
const acerto = []
const aprovados = []
const reprovados = []
const notaApr = []
const notaRep = []

while(true){

    const x = prompt("Nome: ")
    const y = Number(prompt("Número de acertos: "))
    
    if(x.toUpperCase() == "FIM" || y == 0){
        break
    }
    
    nome.push(x)
    acerto.push(y)
    
}

const minimo = Number(prompt("Número mínimo de acertos: "))

for (let i = 0; i < acerto.length; i++) {
    console.log(`${nome[i]} acertou ${acerto[i]} questões.`)       
    if (acerto[i] > minimo) {        
        aprovados.push(nome[i])
        notaApr.push(acerto[i])
    } else {
        reprovados.push(nome[i])
        notaRep.push(acerto[i])
    }
}

console.log("Aprovados")
for (let i = 0; i < aprovados.length; i++) {
   console.log(`${aprovados[i]}: ${notaApr[i]}`)    
}

console.log("Reprovados")
for (let i = 0; i < reprovados.length; i++) {
   console.log(`${reprovados[i]}: ${notaRep[i]}`)    
}

