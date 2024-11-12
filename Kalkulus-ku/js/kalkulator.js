const menuIcon = document.getElementById("imglist");
const menuList = document.getElementById("ulnav");
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});






let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let result = 0;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && operator !== '') {
        operator = op;
    } else {
        calculate();
        operator = op;
        result = parseFloat(currentInput);
        currentInput = '';
    }
}

function calculate() {
    if (operator !== '' && currentInput !== '') {
        switch (operator) {
            case '+':
                result += parseFloat(currentInput);
                break;
            case '-':
                result -= parseFloat(currentInput);
                break;
            case '*':
                result *= parseFloat(currentInput);
                break;
            case '/':
                result /= parseFloat(currentInput);
                break;
        }
        display.value = result;
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    result = 0;
    operator = '';
    display.value = '';
}
