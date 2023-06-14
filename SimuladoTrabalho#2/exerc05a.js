const prompt = require('prompt-sync')();

const num = [13, 20, 25, 36, 42, 45, 50];
let ip = ' ';

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    ip = ip + 'par' + ' ';
  } else {
    ip = ip + 'ímpar' + ' ';
  }
}

console.log(ip);
