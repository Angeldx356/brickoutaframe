var reset = document.getElementById("tiro");

reset.addEventListener("click", agregarpelota);

function agregarpelota() {  
    var scene = document.querySelector('a-scene');

    // Crear una esfera
    var sphere = document.createElement('a-sphere');

    // Establecer atributos para la esfera (posición, color, etc.)
    sphere.setAttribute('id', 'esferita');
    sphere.setAttribute('dynamic-body','');
    sphere.setAttribute('position', '0 6 .5');
    sphere.setAttribute('radius', '.5');
    sphere.setAttribute('color', 'yellow');
    sphere.setAttribute('collider','');

    // Agregar la esfera a la escena
    scene.appendChild(sphere);  
}