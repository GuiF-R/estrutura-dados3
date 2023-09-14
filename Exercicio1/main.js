function iniciarContagem() {
    const numeroInput = document.getElementById('numero');
    const resultadoDiv = document.getElementById('resultado');

    const numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero < 0) {
        resultadoDiv.innerHTML = 'Por favor, digite um número inteiro positivo válido.';
        return;
    }

    resultadoDiv.innerHTML = 'Contagem regressiva:<br>';

    for (let i = numero; i >= 0; i--) {
        setTimeout(function () {
            resultadoDiv.innerHTML += i + '<br>';
            if (i === 0) {
                resultadoDiv.innerHTML += 'Contagem regressiva concluída!';
            }
        }, (numero - i) * 1000);
    }
}
