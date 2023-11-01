// Calcule a média entre as seguintes notas usando o for of:

// 10
// 6.5
// 8
// 7.5

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) { // para cada elemento de notas, execute o código que está dentro das chaves
    somaDasNotas += nota
}

const media = somaDasNotas / notas.length;

console.log (`A média das notas é ${media}.`);

// funciona quando eu quero percorrer uma array do início ao fim
// for tradicional é mais flexivel, posso fazer mais coisas