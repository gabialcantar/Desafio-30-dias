let contValue = 0; // contador zerado

// Referências aos elementos
const contElement = document.getElementById('cont');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Função para atualizar o texto do contador
function updateCont() {
  contElement.textContent = contValue;
}

// Evento para incrementar
incrementButton.addEventListener('click', function () {
  contValue++;
  updateCont();
});

// Evento para decrementar
decrementButton.addEventListener('click', function () {
    if (contValue > 0) {
      contValue--;        
      updateCont();       
    }
  });
  
// Evento para resetar
resetButton.addEventListener('click', function () {
  contValue = 0;
  updateCont();
});
