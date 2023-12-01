// Um professor acidentalmente adicionou nomes repetidos na lista de chamada:

// Ana
// Clara
// Maria
// Maria
// João
// João
// João
// Remova os nomes repetidos, deixando apenas um de cada.

// Definindo um array de nomes
const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

// Criando um Set a partir do array 'nomes' para remover duplicatas
const meuSet = new Set(nomes);
// Um Set é uma coleção de valores únicos, então ele automaticamente remove duplicatas

// Criando um novo array 'nomesAtualizados' a partir do Set usando o operador spread (...)
const nomesAtualizados = [...meuSet];
// Isso cria um array contendo os valores únicos presentes no Set

// Exibindo o novo array sem duplicatas no console
console.log(nomesAtualizados);
