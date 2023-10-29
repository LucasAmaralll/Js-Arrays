// Haverá uma palestra sobre padrões de projetos para estudantes das salas de JavaScript e Python. Nossa missão é juntar ambas as salas em uma única lista que exiba o nome de todas as pessoas.

// Em resumo, temos duas listas e precisamos juntá-las.

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const salasUnificadas = salaJS.concat (salaPython); // passo o parametro que eu quero unificar, lembrnado que vai unificar na ordem, ou seja, salaJS + sala Python

console.log(salasUnificadas);

// lembrando que algumas funçoes de arrays alteram na array original, outras não, isso pode ser consultado na documentação: https://developer.mozilla.org/pt-BR/, porém, as que não alteram é preciso criar uma nova array, como no exemplo acima

