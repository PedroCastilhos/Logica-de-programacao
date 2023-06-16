const prompt = require("prompt-sync")()

const num = Number(prompt("Nº: "))
let metade = num / 2
let resposta = ""

if (num % 2 == 0) {
    
    for (let i = 0; i < num; i++) {
        if (i < metade) {
            resposta = resposta + "[ "
        } else {
            resposta = resposta + "] "
        }        
    }

} else {
    
metade = metade + 0.5
    for (let i = 1; i < num+1; i++) {
        if (i < metade) {
            resposta = resposta + "[ "
        }else if (i == metade) {
            resposta = resposta + "* "
        }  else {
            resposta = resposta + "] "
    }
}
}
    
console.log(resposta)
         


