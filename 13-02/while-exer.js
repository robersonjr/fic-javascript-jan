/*
 tabuada do 7
*/
let multiplicador = 1;

while(multiplicador <= 10) {

    document.write(" 7 *" + multiplicador + " = " + 7 * multiplicador + "<br>");
    multiplicador += 1;
}

// outra maneira 
function gerarTabuada(7) {

let i = 1
console.log(`Tabuada do ${7}:`);


while( i <= 10) {
    console.log(`${1} x ${i} = ${numero * i} `);
    i++;
  }
}
gerarTabuada(7);