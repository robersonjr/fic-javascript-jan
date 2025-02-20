const apagarBnt = document.getElementById("apagar");

apagarBnt.addEventListener("click", function() {
    //Limpa todos os valores
    localStorage.clear();

    // limpa a lista na interface
    listaValores.innerHTML = "";
});