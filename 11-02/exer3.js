/*
  -Armazene sua idade em constante;
  -Escreva uma estrutura condicional em que, se a idade é 7 anos ou menos, ou 
  se a idade é 65 anos ou mais, a frase "Para você, a entrada e gratuita!" é
  armazenada em uma variavel;
  -Se a idade não atende às condições acima, a variavel deve armazenar a 
  mensagen "A entrada é R$ 30,00.";
  -Exiba mensagem no console;
  -Agora, teste diferentes idades para se certificar que a condição do 'if'
  também está funcionando;
*/

const idade = 7;

const primeVariable = idade <= 7;
const secVariable = idade >=65;

if (primeVariable || secVariable) {
    console.log("Para você, a entrada e gratuita!");
} else {
    console.log("A entrada é R$ 30,00.");
}