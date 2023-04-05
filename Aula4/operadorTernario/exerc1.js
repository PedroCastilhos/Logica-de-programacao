const prompt = require('prompt-sync')();

const name = prompt('Nome: ');
const year = Number(prompt('Ano de nascimento: '));

2023 - year >= 18
  ? console.log(
      `Nome do aluno: ${name}\nAno de nascimento: ${year}\n Idade: ${
        2023 - year
      }\n ${name}, você é maior de idade`
    )
  : console.log(
      `Nome do aluno: ${name}\nAno de nascimento: ${year}\nIdade: ${
        2023 - year
      }\n${name}, você é menor de idade`
    );
