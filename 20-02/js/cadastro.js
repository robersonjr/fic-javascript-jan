// Variáveis
const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");

// Adicionar evento de clique ao botão salvar
salvarBtn.addEventListener("click", function () {
    const valor = campo.value;
    //console.log(valor);

       // Validação de formulario
       if(campo.value=== ""){
        alert("Preencha o campo!");
        return false
    }
   
    // Salvar no localStorage
    const chave = `ValorSalvo_${Date.now()}`; //usa timestamppara chave única
    // Funcionalidade do localStorage
    localStorage.setItem(chave, valor);

    // Limpar campo ápos salvar
    campo.value = "";

    // Exibir valores salvos
    carregarValoresSalvos();
});

