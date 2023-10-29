// Temos uma sala de aula com 20 estudantes, representados por uma lista de strings:

// 'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'

// Nosso desafio é dividi-los em duas salas com a mesma quantidade de pessoas. Isto é, duas listas com 10 estudantes, cada.

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice (0, alunos.length/2); // slice = fatiar ou dividir, sempre coloco o índice de onde eu quero que começa e o que termina, respectivamente
// na sala 1 alunos.lenght seria a mesma coisa 1ue (0, 10) isso porque o lenght pega o tamanho da minha lista e divide por 2
const sala2 = alunos.slice (alunos.length/2); // quando não coloca o segundo parâmetro no slice ele entende que quero pegar dá posição 10 até o final
//na sala 2 alunos.lenght seria a mesma coisa 1ue (10) isso porque o lenght pega o tamanho da minha lista e divide por 2

// slice não altera o array original por isso que preciso criar outra const

console.log (sala1);
console.log (sala2);