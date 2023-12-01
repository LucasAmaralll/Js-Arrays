// Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas.

// ana Julia
// Caio vinicius
// BIA silva

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesPadronizados = nomes.map ((nome) => {
    return nome.toUpperCase (); // passa por todos os valores da array e os transformam em maiusculos
})

console.log (nomesPadronizados);

// também daria para fazer assim:

const nomesPadronizadoss = nomes.map ((nome) => nome.toUpperCase ());

console.log (nomesPadronizadoss);