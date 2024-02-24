var reset = document.getElementById("tiro");

reset.addEventListener("click", agregarElementos); 

function agregarElementos() {
    var scene = document.getElementById("scene");

    for (var i = 0; i <= 5; i++) {
        var color = (i % 2 === 0) ? "red" : "blue";
        
        for (var j = 9; j >= -9; j--) {
            var position = j + " " + (14 - i * 0.2) + " 0.5";
            
            var box = document.createElement("a-box");
            box.setAttribute("static-body", "");
            box.setAttribute("position", position);
            box.setAttribute("scale", "1 0.2 0.9");
            box.setAttribute("color", color);

            scene.appendChild(box);
        }
    }
}
