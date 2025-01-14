// Selecionar elementos do DOM
const minValueInput = document.getElementById('minValue');
const maxValueInput = document.getElementById('maxValue');
const generateButton = document.getElementById('generateButton');
const resultElement = document.getElementById('result');

// Função para gerar número aleatório
function generateRandomNumber() {
  const minValue = parseInt(minValueInput.value); // Valor mínimo
  const maxValue = parseInt(maxValueInput.value); // Valor máximo

  // Validação
  if (isNaN(minValue) || isNaN(maxValue)) {
    resultElement.textContent = 'Por favor, insira valores válidos!';
    return;
  }
  if (minValue >= maxValue) {
    resultElement.textContent = 'O valor mínimo deve ser menor que o máximo!';
    return;
  }

  // Gerar número aleatório
  const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  // Exibir resultado
  resultElement.textContent = `Número Gerado: ${randomNumber}`;
}

// Adicionar evento ao botão
generateButton.addEventListener('click', generateRandomNumber);
