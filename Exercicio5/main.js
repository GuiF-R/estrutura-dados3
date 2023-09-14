document.addEventListener('DOMContentLoaded', function () {
    const resultadoDiv = document.getElementById('resultado');
    const multiplosDeTres = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            multiplosDeTres.push(i);
        }
    }

    resultadoDiv.innerHTML = 'Múltiplos de três de 1 a 100: ' + multiplosDeTres.join(', ');
});
