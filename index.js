AFRAME.registerComponent('ball', {
    init: function () {
        var spawn = document.getElementById('spawner');
        var position = spawn.getAttribute('position');

        var xd = document.createElement('a-sphere');
        xd.setAttribute('dynamic-body', '');
        xd.setAttribute('position', position); // Utiliza la posición del spawner
        xd.setAttribute('radius', '0.1');
        xd.setAttribute('color', 'blue');
        xd.classList.add('ballon');
        spawn.appendChild(xd); // Agregar el elemento al escenario
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('tiro');
    button.addEventListener('click', function () {
        var ballSpawner = document.getElementById('ball-spawner');
        ballSpawner.components.ball.init(); // Inicializar manualmente el componente ball
    });
});
