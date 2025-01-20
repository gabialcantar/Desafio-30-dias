const container = document.getElementById("container");

// Adiciona um ouvinte de evento ao contêiner
container.addEventListener("click", function (event) {
    // Verifica se o elemento clicado é o botão
    if (event.target.tagName === "BUTTON") {
        // Seleciona o campo de texto
        const inputText = document.getElementById("text");
        
        // Verifica se o campo de texto está preenchido
        if (inputText.value.trim() !== "") {
            console.log(`Você digitou: ${inputText.value}`);
        } else {
            console.log("O campo de texto está vazio!");
        }
    }
});
