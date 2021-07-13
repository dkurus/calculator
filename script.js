// when user clicks first number button -> store in firstNumber

// when user clicks another number button before the operator, concatenate with earlier number buttons

// when user clicks operator button, set isOpereratorActive = true, and store value in currentOperator

// when user clicks a number button after the operator button, store it in secondNumber. while operatoractive is true, concatenate any further numbers to secondNumber.

// when user clicks an operatorbutton while isOperatorActive is true, use calculate function with firstNumber, secondNumber and currentOperator. return the number to A, and display. update currentOperator to the button clicked.

// when user clicks = , run the calculate func and return to value to display and set isOperatorActive to false




let currentNum = '';
let previousNum = '';
let currentOperator = undefined;
let displayValueHolder = '';
let calcNum = '';
let reUseCalcNum = false;

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return b / a;
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function operate (a, b, c) {
 b = Number(b);
 c = Number(c);
 return this[a](b, c);
}

function clearCalculatorValues (){
    displayValueHolder = '';
    currentNum = '';
    previousNum = '';
}

let onScreenDisplay = document.querySelector('h3');
let displayContent = '';
function updateDisplay (passInDaNumba) {
   displayValueHolder += passInDaNumba
   onScreenDisplay.textContent = displayValueHolder;
}
 
const allNumberButtons = document.querySelectorAll('.digit');
allNumberButtons.forEach(button => {
  button.addEventListener('click', (e)=> {
      clearOrContinue(e.target.class);
      updateDisplay(e.target.id);
      currentNum += e.target.id;
  })
})

const allOperatorButtons = document.querySelectorAll('.operator');
allOperatorButtons.forEach(button => {
    button.addEventListener('click', (e) => { 
        clearOrContinue(e.target.className);
        currentOperator = e.target.id;
        previousNum = currentNum;
        currentNum = '';
        displayValueHolder = '';
});
})

const equalsOperator = document.querySelector('#equals');
equalsOperator.addEventListener('click', ()=> {
 calcNum = operate(currentOperator, currentNum, previousNum);
 clearCalculatorValues();
 updateDisplay(calcNum);
 reUseCalcNum = true;
})

function clearOrContinue (digitOrOperater){
    if (reUseCalcNum == true  && digitOrOperater === '.operater') {
        alert('heyo');

    } else if (reUseCalcNum == true  && digitOrOperater === '.digit'){
     console.log('bayo');
    }
}