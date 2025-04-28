
// let soma = 0
// const numeros = [65, 44, 12, 4]

// function minhaFuncao(item){
//     soma += item
// }

// numeros.forEach(minhaFuncao)

// alert(soma)

// let somaDasNotas = 0;

// notas.forEach(function (nota) {
//  somaDasNotas += nota;
// })

// notas.forEach(somaNotas);

// function somaNotas (nota) {
//     somaDasNotas += nota;
// }

// const media = somaDasNotas / notas.length;

// notas.forEach(nota)=>{somaDasNotas += nota}

// const media = somaDasNotas / notas.length

// alert(`A média é ${media}`)

const notas = [10, 6.5, 8, 7.5];

function mostraNota(nota){
    alert(nota)
}

function verificaSeNotaAprovada(nota){
    if(nota > 7){
        alert(`Nota: ${nota}. Aluno aprovado!`)
    }else{
        alert(`Nota: ${nota}. Aluno reprovado!`)
    }
}

function tiraPonto(nota){
    alert(`A nova nota é: ${nota-1}`)
}

notas.forEach(mostraNota)
notas.forEach(verificaSeNotaAprovada)
notas.forEach(tiraPonto)