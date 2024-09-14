function performConversion() {
    const inputTemp = document.getElementById('tempInput').value;
    const sourceUnit = document.getElementById('unitSelect').value;
    const targetUnit = document.getElementById('targetUnitSelect').value;
    const resultDisplay = document.getElementById('conversionResult');
    
    if (isNaN(inputTemp) || inputTemp.trim() === '') {
        resultDisplay.innerHTML = 'Please enter a valid number!';
        return;
    }

    const temperature = parseFloat(inputTemp);
    let output = '';

    // Convert the input temperature to Celsius first
    let tempInCelsius;
    switch (sourceUnit) {
        case 'celsius':
            tempInCelsius = temperature;
            break;
        case 'fahrenheit':
            tempInCelsius = (temperature - 32) * 5/9;
            break;
        case 'kelvin':
            tempInCelsius = temperature - 273.15;
            break;
        default:
            resultDisplay.innerHTML = 'Unknown unit!';
            return;
    }

    // Convert from Celsius to the target unit
    switch (targetUnit) {
        case 'celsius':
            output = `${tempInCelsius} °C`;
            break;
        case 'fahrenheit':
            output = `${(tempInCelsius * 9/5) + 32} °F`;
            break;
        case 'kelvin':
            output = `${tempInCelsius + 273.15} K`;
            break;
        default:
            resultDisplay.innerHTML = 'Unknown unit!';
            return;
    }

    resultDisplay.innerHTML = output;
}