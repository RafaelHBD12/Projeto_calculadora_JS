

let display = document.querySelector('#display')

let firstValue = '';
let secundValue = '';
let operator = '';
let currentValue = 1;


function reset() {

    firstValue = '';
    secundValue = '';
    operator = '';
    currentValue = 1;

}



function clicked(button) {
    switch (button) {

        case 'C':
            reset()
            break;

        case '÷':
        case '×':
        case '-':
        case '+':
            if (firstValue !== '')
                operator = button;
            currentValue = 2;

            break;
        case '.':
            if (currentValue === 1 && firstValue !== '' && !firstValue.includes('.')) {
                firstValue += '.';
            }
            if (currentValue === 2 && secundValue !== '' && !secundValue.includes('.')) {
                secundValue += '.';
            }
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if (currentValue === 1) {
                firstValue += button
            }
            if (currentValue === 2) {
                secundValue += button
            }

            break;

        case '=':
            if (currentValue === 2 && secundValue != '') {

                let result = calculate(firstValue, operator, secundValue);
                reset();
                firstValue = result;
            }

            break;
    }

    updateDisplay();

}


function updateDisplay() {

    if (firstValue === '') {
        display.innerHTML = '0';
    } else {
        display.innerHTML = firstValue + operator + secundValue;
    }
}

function calculate(first, op, second) {
    first = parseFloat(first);
    second = parseFloat(second);

    switch (op) {
        case '÷':
            return first / second;
            break;
        case '×':
            return first * second;
            break;
        case '-':
            return first - second;
            break;
        case '+':
            return first + second;
            break;
        default:
            return 0;
            break;

    }


}
