const prompt = require('prompt-sync')();

const nomes = ['Ana', 'Bianca', 'Carlos', 'Débora', 'Eduardo', 'Fernanda'];

const letra = prompt('Letra: ');

const nomes2 = nomes.filter((nome) => nome.indexOf(letra) >= 0);

console.log(nomes2);

if (nomes2.length == 0) {
  console.log('Não há nomes com a letra informada');
} else {
  console.log(nomes2.join(', '));
}
