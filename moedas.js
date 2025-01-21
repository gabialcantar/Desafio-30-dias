const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const convertButton = document.getElementById('convertButton');
const resultElement = document.getElementById('result');

const exchangeRates = {
    USD: 6.00, // 1 USD = 6.00 BRL
    EUR: 5.60, // 1 EUR = 5.60 BRL
    GBP: 6.30  // 1 GBP = 6.30 BRL
};

function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const selectedCurrency = currencySelect.value;

    // Validação
    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = 'Por favor, insira um valor válido!';
        return;
    }

    // Calcular valor convertido
    const rate = exchangeRates[selectedCurrency];
    const convertedAmount = amount / rate;

    // Exibir resultado formatado
    resultElement.textContent = `R$ ${amount.toFixed(2)} equivale a ${convertedAmount.toFixed(2)} ${selectedCurrency}`;
}

// Adicionar evento ao botão "Converter"
convertButton.addEventListener('click', convertCurrency);
