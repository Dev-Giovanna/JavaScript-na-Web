

const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// For Clássico

for (let i = 0; i < 5; i++) {
    //bloco de código que será repetido
    alert(`i é igual a ${i}`)

} //i==0 -> i==1 -> i==2 -> i==3 -> i==4 -> i==5


//primeira expressão: executada apenas uma vez
//segunda expressão: condição de execução
//terceira expressão: executada sempre ao final do bloco

for (let indice = 0; indice < notas.length; indice++) {
    alert(`Indice: ${indice}  | Nota: ${notas[indice]}`)
}

let somaDasNotas = 0;

//Calcule a média das notas usando o laço For:
for(let indice = 0; indice < notas.length; indice++) {
    somaDasNotas = somaDasNotas + notas[indice]
}

const media = (somaDasNotas)/ notas.length
alert(`A média das notas é: ${media.toFixed(2)}`)