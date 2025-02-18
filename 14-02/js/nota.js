// Variáveis
const inputNota = document.getElementById("nota")
const resultado = document.getElementById("resultado")
const message = document.getElementById("message")

function resultadoNotaClick(event) {
    event.preventDefault();
    console.log(inputNota.value);

    //Validação de formulário
    if (inputNota.value === "") {
        message.style.display="block";
        //alert("Digite a nota");
        return false;
    }

    //condição
    if (inputNota.value >=6) {
        resultado.innerHTML = "Aprovado,meus parabéns."
    } else {
        resultado.innerHTML = "Reprovado, melhore!"
    } 

    message.style.display="none";
  
    inputNota.value ="";

}
