const billAmountInput = document.getElementById('billAmount');
const tipPercentageInput = document.getElementById('tipPercentage');
const calculateButton = document.getElementById('calculateButton');
const resultElement = document.getElementById('result');

// Função para calcular gorjeta
function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value); // Valor da conta
  const tipPercentage = parseFloat(tipPercentageInput.value); // Porcentagem da gorjeta

  // Validação
  if (isNaN(billAmount) || billAmount <= 0) {
    resultElement.textContent = 'Por favor, insira um valor válido para a conta.';
    return;
  }
  if (isNaN(tipPercentage) || tipPercentage < 0) {
    resultElement.textContent = 'Por favor, insira uma porcentagem válida.';
    return;
  }

  // Cálculo
  const tipAmount = (billAmount * tipPercentage) / 100; // Gorjeta
  const totalAmount = billAmount + tipAmount; // Total a pagar

  // Exibir resultado
  resultElement.textContent = `Gorjeta: R$ ${tipAmount.toFixed(2)} | Total: R$ ${totalAmount.toFixed(2)}`;
}

// Adicionar evento ao botão
calculateButton.addEventListener('click', calculateTip);
