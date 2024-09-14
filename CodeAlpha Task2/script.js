
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function del() {
    const display = document.getElementById('display');
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression in the display
        const result = eval(display.innerText);
        // Update the display with the result
        display.innerText = result;
    } catch (error) {
        // In case of an error, display an error message
        display.innerText = 'Error';
    }
}
