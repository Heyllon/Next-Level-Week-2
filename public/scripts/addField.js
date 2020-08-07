// Procurar o botao 
document.querySelector("#add-time")
// Quando clicar no botao 
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {
    // dubplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // limpar os campos
    const fields = newFieldContainer.querySelectorAll('input') // selecionando todos os inputs atravez do querySelectorAll
    
    //para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa
        field.value = ""
    }) //forEach significa para cada 

    // colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
