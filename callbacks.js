const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome){
    console.log (nome);
});

// também poderia fazer da seguinte forma

nomes.forEach((nome) => {
    console.log (nome);
});

// também poderia fazer da seguinte forma

function imprimeNome (nome) {
    console.log (nome);
}

nomes.forEach (imprimeNome);

// eu posso passar qualquer nome como parametro, não necessáriamente "nome", é apenas um parametro que ira percorrer toda a array