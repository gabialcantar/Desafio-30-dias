// Selecionar elementos do DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Função para adicionar uma tarefa
function addTask() {
  const taskText = taskInput.value.trim(); // Remover espaços extras
  if (taskText === '') {
    alert('Por favor, digite uma tarefa!');
    return;
  }

  // Criar elemento <li>
  const li = document.createElement('li');
  li.textContent = taskText;

  // Adicionar evento de riscar/desriscar
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Criar botão de remoção
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';
  removeButton.classList.add('remove');
  removeButton.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Adicionar botão ao <li>
  li.appendChild(removeButton);

  // Adicionar <li> à lista
  taskList.appendChild(li);

  // Limpar campo de texto
  taskInput.value = '';
}

// Adicionar evento ao botão "Adicionar"
addButton.addEventListener('click', addTask);

// Adicionar tarefa ao pressionar Enter
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
