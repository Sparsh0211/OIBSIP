function performConversion() {
    const tempInput = document.getElementById('tempInput').value.trim();
    const unit = document.getElementById('unitSelect').value;
    const targetUnit = document.getElementById('targetUnitSelect').value;
    const resultContainer = document.getElementById('conversionResult');

    if (!unit || !targetUnit) {
        resultContainer.innerHTML = 'Please select both units.';
        return;
    }

    const tempValue = parseFloat(tempInput);

    // Check if the input is not a number
    if (isNaN(tempValue)) {
        resultContainer.innerHTML = 'Invalid input: Please enter a numeric value.';
        return;
    }

    let convertedValue;

    // Conversion logic
    if (unit === 'celsius') {
        if (targetUnit === 'fahrenheit') {
            convertedValue = (tempValue * 9/5) + 32;
        } else if (targetUnit === 'kelvin') {
            convertedValue = tempValue + 273.15;
        } else {
            convertedValue = tempValue; // If both units are the same
        }
    } else if (unit === 'fahrenheit') {
        if (targetUnit === 'celsius') {
            convertedValue = (tempValue - 32) * 5/9;
        } else if (targetUnit === 'kelvin') {
            convertedValue = (tempValue - 32) * 5/9 + 273.15;
        } else {
            convertedValue = tempValue;
        }
    } else if (unit === 'kelvin') {
        if (targetUnit === 'celsius') {
            convertedValue = tempValue - 273.15;
        } else if (targetUnit === 'fahrenheit') {
            convertedValue = (tempValue - 273.15) * 9/5 + 32;
        } else {
            convertedValue = tempValue;
        }
    }

    resultContainer.innerHTML = `Result: ${convertedValue.toFixed(2)} ${targetUnit}`;
}
