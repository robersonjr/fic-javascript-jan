//Vaariável
const nome = document.getElementById("nome");
const cidade = document.getElementById("cidade");
const email = document.getElementById("email");

const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const txtEmail = document.getElementById("txt_email");

function mudar (event) {
    event.preventDefault();
    console.log(nome.value);

    //Imprimir na tela
    titulo.innerHTML = nome.value;
    subtitulo.innerHTML = cidade.value;
    txtEmail.innerHTML = email.value;

    //Limpar os campos
    nome.value = "";
    cidade.value = "";
    email.value = "";



}