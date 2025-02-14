// Variáveis
const inputNota = document.getElementById("nota")
const resultado = document.getElementById("resultado")

function resultadoNotaClick(event) {
    event.preventDefault();
    console.log(inputNota.value);

    //condição
    if (inputNota.value >=6) {
        resultado.innerHTML = "Aprovado,meus parabéns."
    } else {
        resultado.innerHTML = "Reprovado, melhore!"
    }

    inputNota.value ="";

}
