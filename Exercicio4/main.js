document.addEventListener('DOMContentLoaded', function () {
    const calcularBtn = document.getElementById('calcularBtn');
    calcularBtn.addEventListener('click', calcularSoma);
});

function calcularSoma() {
    const numeroInput = document.getElementById('numero');
    const resultadoDiv = document.getElementById('resultado');

    const numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero < 1) {
        resultadoDiv.innerHTML = 'Por favor, digite um número inteiro positivo válido.';
        return;
    }

    let somaQuadrados = 0;

    for (let i = 1; i <= numero; i++) {
        somaQuadrados += i * i;
    }

    resultadoDiv.innerHTML = `A soma dos quadrados dos primeiros ${numero} números inteiros positivos é ${somaQuadrados}.`;
}
