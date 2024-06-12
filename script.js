let firstNumb = '';
let scndNumb = '';
let currentOperator = null;
let displayValue = '0';

function add(a, b) {
    
    return a + b;
}

function subtract(a, b) {

    return a - b;
}

function divide(a, b) {

    return a / b;
}

function multiply(a, b) {

    return a * b;
}

function updateDisplay(){
    const display = document.getElementById("display");
    display.textContent = displayValue;
}

function appendNumber(number){
    if (currentOperator === null){
        firstNumb += number;
        displayValue = firstNumb;
    }else{
        scndNumb += number;
        displayValue = scndNumb;
    }
    updateDisplay();

}

function appendOperator(operator){
    if (currentOperator !== null && scndNumb !== ''){
        ongotpointercapture();
    }
    currentOperator = operator;
    if(firstNumb !== '' && scndNumb !== ''){
        displayValue = firstNumb;
    }
    updateDisplay();
}

function clearDisplay(){
    firstNumb = '';
    scndNumb = '';
    currentOperator = null;
    displayValue = '0';
    updateDisplay();
}

function operate(){
    let numb1 = parseFloat(firstNumb);
    let numb2 = scndNumb !== ''? parseFloat(scndNumb) : numb1;
    
    if (isNaN(numb1) || isNaN(numb2)) return;

    let result;

    if (currentOperator === '+'){
        result = add(numb1, numb2);
    } else if(currentOperator === '-'){
        result = subtract(numb1, numb2);
    } else if(currentOperator === '*'){
        result = multiply(numb1, numb2);
    }else if(currentOperator === '/'){
        result = divide(numb1, numb2);
    }

    displayValue = String(result);
    updateDisplay();
    firstNumb = displayValue;
    scndNumb = '';
    currentOperator = null;
}

