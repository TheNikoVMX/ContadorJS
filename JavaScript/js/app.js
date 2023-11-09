var botonClic = document.getElementById('botonClic');
var botonReiniciar = document.getElementById('botonReiniciar');
var contador = document.getElementById('contador');
var objetivoInput = document.getElementById('objetivoInput');

var clics = 0;
var objetivoClics = 10;

botonClic.addEventListener('click', function() {
    clics++;
    actualizarContador();
    cambiarColorContador();
    verificarObjetivoClics();
});

botonReiniciar.addEventListener('click', function() {
    clics = 0;
    objetivoClics = parseInt(objetivoInput.value) || 10;
    actualizarContador();
    reiniciarColorContador();
});

function actualizarContador() {
    contador.innerHTML = clics;
}

function cambiarColorContador() {
    var color = getRandomColor();
    contador.style.color = color;
}

function reiniciarColorContador() {
    contador.style.color = '#4285f4';
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function verificarObjetivoClics() {
    if (clics === objetivoClics) {
        alert('¡Felicidades! Has alcanzado el objetivo de ' + objetivoClics + ' clics.');
    }
}