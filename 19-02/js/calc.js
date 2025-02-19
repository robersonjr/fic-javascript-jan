// Obtem os elementos do DOM
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");

// Variável resultado
const resultado = document.getElementById("resultado")

// Função para fazer a soma
function somar(event) {
    event.preventDefault();
    
    let resultadoSoma = Number(valor1.value) + Number(valor2.value);
    resultado.innerHTML = resultadoSoma

    limparCampos()
}

// Função para subtração
function sub (event) {
    event.preventDefault();

    let resultadoSub = Number(valor1.value) - Number(valor2.value);
    resulttadoSub.innerHTML = resultadoSub

    limparCampos()
}    

//Função para divisão
function div (event) {
    event.preventDefault();

    let resultadoDiv = Number(valor1.value) / Number(valor2.value);
    resulttadoDiv.innerHTML = resultadoDiv

    limparCampos()   
}

//Função para multiplicação
function multiplicação (event) {
    event.preventDefault();

    let resultadoMult = Number(valor1.value) * Number(valor2.value);
    resulttadoMult.innerHTML = resultadoMult

    limparCampos()
}

//Função limpar campos
function limparCampos (){
    valor1.value = "";
    valor2.value = "";
}