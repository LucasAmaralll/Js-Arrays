// Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

// const salaJava = [6, 5, 8, 9, 5, 6];

// const salaPython = [7, 3.5, 8, 9.5];

// Definindo arrays de notas para diferentes salas
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Função para calcular a média das notas em uma sala
function calculaMedia(notasDaSala) {
    // Usando o método reduce para somar todas as notas da sala
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => acumulador + nota, 0);
    // O valor inicial do reduce é 0; a função de callback soma cada nota ao acumulador

    // Calculando a média dividindo a soma pelo número de notas na sala
    const media = somaDasNotas / notasDaSala.length;
    // Utilizando o length para obter o número de elementos no array

    return media; // Retornando a média calculada
}

// Exibindo a média de cada sala no console
console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);
