// Temos que criar uma lista de chamada com os seguintes alunos:

// João
// Ana
// Caio
// Lara
// Marjorie
// Leo
// Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo.

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice (1, 2, "Rodrigo"); // splice funciona da seguinte forma, eu passo o primeiro parametro, o índice do elemento que eu quero remover e o segundo parâmetro é a quantidade de índices que eu quero remover a partir do primeiro índice, ele também aceita um terceiro parâmetro, que seria o que eu quero colocar no lugar dos índices que eu removi

console.log (nomes);