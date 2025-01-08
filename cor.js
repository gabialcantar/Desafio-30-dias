function generateColor() {
    const caracteres = '0123456789ABCDEF';
    let cor = '#';

    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        cor += caracteres[randomIndex]; 
    }

    return cor;
}

// evento clique
document.getElementById('generate-btn').addEventListener('click', function () {
    const newColor = generateColor(); // nova cor usando a função `generateColor`.
    document.body.style.backgroundColor = newColor; // recebe a cor gerada pelo evento de clique
    document.getElementById('color-code').textContent = newColor; // texto, cor gerada pela cor hexadecimal
});
