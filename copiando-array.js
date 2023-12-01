// Considere o seguinte array de notas:

// const notas = [7, 7, 8, 9];

// Crie um novo array com a nota 10 a mais, sem alterar o array original.

// Definindo um array de notas
const notas = [7, 7, 8, 9];

// Criando uma cópia do array 'notas' usando o operador spread (...)
const novasNotas = [...notas, 10];
// O operador spread cria uma cópia rasa do array, ou seja, um novo array com os mesmos elementos

// Adicionando a nota 10 à cópia 'novasNotas'
// novasNotas.push(10); faz a mesma coisa do ,10

// Exibindo as notas originais e as novas notas no console
console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
