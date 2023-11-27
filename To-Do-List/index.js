// Arquivo script.js
// Selecionar os elementos do DOM
const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");

// Adicionar um evento de submit ao formulário
form.addEventListener("submit", function(event) {
    // Prevenir o comportamento padrão do formulário
    event.preventDefault();
    // Obter o valor do campo de texto
    const task = input.value;
    // Verificar se o campo não está vazio
    if (task) {
        // Criar um novo elemento li
        const li = document.createElement("li");
        // Criar um input do tipo checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        // Adicionar um evento de change ao checkbox
        checkbox.addEventListener("change", function() {
            // Alterar a classe do li de acordo com o estado do checkbox
            li.classList.toggle("completed");
        });
        // Criar um elemento span para mostrar a descrição da tarefa
        const span = document.createElement("span");
        span.textContent = task;
        // Criar um botão para excluir a tarefa
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        // Adicionar um evento de click ao botão de exclusão
        deleteButton.addEventListener("click", function() {
            // Remover o li da lista
            list.removeChild(li);
        });
        // Adicionar os elementos filhos ao li
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        // Adicionar o li à lista
        list.appendChild(li);
        // Limpar o campo de texto
        input.value = "";
    }
});