// conversión de temperaturas 

function convertTemperature() {
    let tempInput = document.getElementById("tempInput").value;
    let output = document.getElementById("output");

    // Verificar si la entrada es un número
    if (isNaN(tempInput) || tempInput.trim() === "") {
        output.innerHTML = "Por favor, ingrese un número válido para la temperatura.";
        return;
    }

    // Convertir la entrada a número
    let celsius = parseFloat(tempInput);

    // Conversión de Celsius a Fahrenheit y Kelvin
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    // Mostrar los resultados en el DOM
    output.innerHTML = `La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}°F <br>
                        La temperatura en Kelvin es: ${kelvin.toFixed(2)}K`;
}

// También puedes mostrar los resultados en la consola si prefieres:
// console.log(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);
// console.log(`La temperatura en Kelvin es: ${kelvin.toFixed(2)}K`);