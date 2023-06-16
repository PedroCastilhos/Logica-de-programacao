const prompt = require("prompt-sync")()

let alunos = []
let x = ''
let selecao

while(true){
    x = prompt("Nome do aluno: ")
    alunos.push(x)

    if (x == "fim" ) {
        break
    }
}

const n = Number(prompt("Formar grupos de Quantos Alunos: "))

const grupos = (alunos.length  / n).toFixed(0)

//If para saber se os grupos teriam números iguais ou um grupo com número diferente de integrantes
if (alunos.length % n == 0) {
    //Esse FOR trabalharia o número de grupos
    for (let i = 0; i < grupos; i++) {
       //Esse aqui trabalharia quantos integrantes cada grupo teria
        for (let i = 0; i < grupo; i++) {
            const element = array[i];            
        }
    }
} else {
    // A mesma coisa do if acima só que com um grupo com integrante(s) a menos
}

//Infelizmente não fui capaz de pensar em uma solução para isso, se eu tivesse 1 dia inteiro para pensar, talvez eu conseguiria hahah
//Abraço!