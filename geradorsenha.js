// Selecionar elementos do DOM
const passwordLengthInput = document.getElementById('passwordLength');
const generateButton = document.getElementById('generatePassword');
const generatedPasswordInput = document.getElementById('generatedPassword');

// Função para gerar senha aleatória
function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// Adicionar evento ao botão
generateButton.addEventListener('click', () => {
    const length = parseInt(passwordLengthInput.value);
    
    if (isNaN(length) || length < 4 || length > 20) {
        alert('Por favor, insira um valor entre 4 e 20.');
        return;
    }

    const newPassword = generatePassword(length);
    generatedPasswordInput.value = newPassword;
});
