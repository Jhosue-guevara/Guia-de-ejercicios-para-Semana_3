// Ejercicio 1: Cálculo de Velocidad
function calcularVelocidad() {
    var distanciaKm = parseFloat(document.getElementById("distancia").value);
    var tiempoMin = parseFloat(document.getElementById("tiempo").value);

    if (isNaN(distanciaKm) || isNaN(tiempoMin)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese valores numéricos válidos.',
        });
        return;
    }

    var distanciaMetros = distanciaKm * 1000;
    var tiempoSegundos = tiempoMin * 60;

    var velocidadMetrosPorSegundo = distanciaMetros / tiempoSegundos;

    Swal.fire({
        icon: 'success',
        title: '¡Listo!',
        text: 'La velocidad es: ' + velocidadMetrosPorSegundo.toFixed(2) + ' m/s',
    });

    document.getElementById("resultadoVelocidad").innerHTML = "La velocidad es: " + velocidadMetrosPorSegundo.toFixed(2) + " m/s";
}

// Ejercicio 2: Clasificación de Triángulos
function clasificarTriangulo() {
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese valores numéricos válidos.',
        });
        return;
    }

    if (lado1 === lado2 && lado2 === lado3) {
        Swal.fire({
            icon: 'success',
            title: '¡Excelente!',
            text: 'Es un Triángulo Equilátero',
        });
        document.getElementById("resultadoTriangulo").innerHTML = "Triángulo Equilátero";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        Swal.fire({
            icon: 'success',
            title: '¡Excelente!',
            text: 'Es un Triángulo Isósceles',
        });
        document.getElementById("resultadoTriangulo").innerHTML = "Triángulo Isósceles";
    } else {
        Swal.fire({
            icon: 'success',
            title: '¡Excelente!',
            text: 'Es un Triángulo Escaleno',
        });
        document.getElementById("resultadoTriangulo").innerHTML = "Triángulo Escaleno";
    }
}

// Ejercicio 3: Calculadora
function realizarOperacion(operacion) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese valores numéricos válidos.',
        });
        return;
    }

    switch (operacion) {
        case 'suma':
            var resultado = num1 + num2;
            Swal.fire({
                icon: 'success',
                title: '¡Listo!',
                text: 'El resultado es: ' + resultado,
            });
            document.getElementById("resultadoCalculadora").innerHTML = "Resultado: " + resultado;
            break;
        case 'resta':
            var resultado = num1 - num2;
            Swal.fire({
                icon: 'success',
                title: '¡Listo!',
                text: 'El resultado es: ' + resultado,
            });
            document.getElementById("resultadoCalculadora").innerHTML = "Resultado: " + (num1 - num2);
            break;
        case 'multiplicacion':
            var resultado = num1 * num2;
            Swal.fire({
                icon: 'success',
                title: '¡Listo!',
                text: 'El resultado es: ' + resultado,
            });
            document.getElementById("resultadoCalculadora").innerHTML = "Resultado: " + (num1 * num2);
            break;
        case 'division':
            if (num2 === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se puede dividir por cero.',
                });
            } else {
                var resultadoDivision = num1 / num2;
                Swal.fire({
                    icon: 'success',
                    title: '¡Listo!',
                    text: 'El resultado es: ' + resultadoDivision,
                });
                document.getElementById("resultadoCalculadora").innerHTML = "Resultado: " + resultadoDivision;
            }
            break;
        default:
            break;
    }
}

// Ejercicio 4: Número Primo
function verificarPrimo() {
    var numero = parseInt(document.getElementById("numeroPrimo").value);

    if (isNaN(numero)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese un valor numérico.',
        });
        return;
    }

    var esPrimo = true;

    if (numero < 2) {
        esPrimo = false;
    } else {
        for (var i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) {
        Swal.fire({
            icon: 'success',
            title: '¡Genial!',
            text: numero + ' es un número primo.',
        });
        document.getElementById("resultadoPrimo").innerHTML = numero + " es un número primo.";
    } else {
        Swal.fire({
            icon: 'error',
            title: '¡Oh no!',
            text: numero + ' no es un número primo.',
        });
        document.getElementById("resultadoPrimo").innerHTML = numero + " no es un número primo.";
    }
}

