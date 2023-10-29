// Crie uma função que recebe como argumento o nome de um aluno.
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.
// Para este desafio, usaremos as mesmas listas da aula anterior:

// 'João', 'Juliana', 'Caio', 'Ana'
// 10, 8, 7.5, 9

const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias =[alunos, medias];

function ExibeNomeENota (aluno) {
    if (listaDeAlunosEMedias [0].includes(aluno)){ // confere se o que estamos passando para o parâmetro está incluso na lista

        // const alunos = listaDeAlunosEMedias [0];
        // const medias = listaDeAlunosEMedias[1];
        // poderia fazer também:
        const [alunos, medias] = listaDeAlunosEMedias

        const indice = alunos.indexOf(aluno); // retorna para nós o índice que passamos para o parâmetro

        const mediaDoAluno = medias[indice]; // passa o resultado 0 que foi pego na parte de cima, e consulta na array de medias
        
        console.log (`${aluno} tem a média ${mediaDoAluno}.`);
    } else {
        console.log("Aluno não encontrado");
    }
}

ExibeNomeENota ("Ana"); // passa o aluno que está na function ExibeNomeENota