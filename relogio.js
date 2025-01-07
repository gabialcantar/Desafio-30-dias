function updateClock() {
    const now = new Date(); // Obtém a data e hora
  
    // Pega as horas, minutos e segundos
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Atualiza o relógio
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  
    // dia, mês e ano
    const day = String(now.getDate()).padStart(2, '0'); // Dia (01-31)
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mês (0-11, então somamos 1)
    const year = now.getFullYear(); // Ano completo (ex: 2025)
  
    // Atualiza a data
    const dateElement = document.getElementById('date');
    dateElement.textContent = `${day}/${month}/${year}`;
  }
  
  // Atualiza imediatamente ao carregar a página
  updateClock();
  
  // Atualiza o relógio e a data a cada segundo
  setInterval(updateClock, 1000);
  