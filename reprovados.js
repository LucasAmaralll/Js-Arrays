// Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos:

// Ana: 7
// Marcos: 4.5
// Maria: 8
// Mauro: 7,5
// Temos duas listas, uma com o nome dos alunos e outra com a média de cada aluno.

// Definindo arrays de alunos e médias correspondentes
const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

// Usando o método filter para encontrar alunos reprovados
const reprovados = alunos.filter((aluno, indice) => {
    // A função de callback recebe o nome do aluno (aluno) e o índice correspondente (indice)
    
    return medias[indice] < 7; 
    // Filtrando os alunos cujas médias (associadas pelos índices) são menores que 7
    // O método filter irá criar um novo array contendo apenas os alunos reprovados
});

console.log(reprovados); // Exibindo os alunos reprovados no console
