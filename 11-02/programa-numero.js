/*
     -Verifica se o numero é positivo, negativo ou zero
    se o número for maior que zero, é positivo
    se o número for menor que zero, é negativo 
    senão o numero não é valido
*/

let numero = prompt("Digite um numero: ");

if (numero > 0) {
    document.write(`O número ${numero} é positivo`);
} else if (numero < 0) {
    document.write(`O número ${numero} é negatvo`);
} else {
    document.write(`O número ${numero} é nulo`);
}