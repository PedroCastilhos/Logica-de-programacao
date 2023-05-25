const prompt = require('prompt-sync')();

const num = []

while(true){

    const x = Number(prompt("Número: "))

    if (x == 0){
        break
    }

    num.push(x)

}

if (num[0] < num[1] && num[1] < num[2] && num) {
    console.log(`Esse array é crescente!`)
} else {
    console.log(`Esse array é decrescente!`)
}