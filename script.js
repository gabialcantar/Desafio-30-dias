document.getElementById('welcome-btn').addEventListener('click', function () {
    const messageElement = document.getElementById('message');
    messageElement.textContent = 'Parabéns! Você deu o primeiro passo no seu desafio!';
    messageElement.style.color = '#008cba';
  });