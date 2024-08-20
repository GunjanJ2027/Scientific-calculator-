let display = document.getElementById('display');
let currentValue = '';

function appendNumber(number) {
    currentValue += number;
    display.value = currentValue;
}

function appendOperator(operator) {
    currentValue += operator;
    display.value = currentValue;
}

function appendFunction(func, exp = null) {
    if (exp !== null) {
        currentValue += `${func}(${currentValue},${exp})`;
    } else {
        currentValue = `${func}(${currentValue})`;
    }
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    display.value = currentValue;
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    display.value = currentValue;
}

function calculateResult() {
    try {
        currentValue = eval(currentValue);
        display.value = currentValue;
    } catch (error) {
        display.value = 'Error';
    }
}
