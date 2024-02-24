var isMovingLeft = false;
        var isMovingRight = false;

        document.addEventListener('keydown', function(event) {
            if (event.key === 'u') {
                isMovingLeft = true;
            } else if (event.key === 'i') {
                isMovingRight = true;
            }
        });

        document.addEventListener('keyup', function(event) {
            if (event.key === 'u') {
                isMovingLeft = false;
            } else if (event.key === 'i') {
                isMovingRight = false;
            }
        });

        function moveBarra() {
            var barra = document.getElementById('barra');
            var position = barra.getAttribute('position');
            var step = 0.2;

            if (isMovingLeft && parseFloat(position.x) - step >= -11.5) {
                position.x -= step;
            }

            if (isMovingRight && parseFloat(position.x) + step <= 11.5) {
                position.x += step;
            }

            barra.setAttribute('position', position);
        }
        
        setInterval(moveBarra, 16);

        