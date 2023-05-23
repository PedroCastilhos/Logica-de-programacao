const prompt = require('prompt-sync')();
const num = Number(prompt('Número: '));

for (let i = 1; i < num; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
