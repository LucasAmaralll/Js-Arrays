// Dessa vez, um dos professores acidentalmente lançou 5 notas no sistema para um aluno:

// 10
// 6
// 8
// 5.5
// 10
// Para corrigir, precisamos que remover a última nota e fazer o cálculo da média corretamente.

const notas = [10, 6, 8, 5.5, 10];

notas.pop (); // remove o último elemento do array

const media = (notas[0] + notas[1] + notas [2] + notas[3]) / notas.length

console.log (`A média é ${media}.`);