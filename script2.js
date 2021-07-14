//how should it work
// 1. when user click a number button, it should be stored in a variable. currentNum. 
// 1a). this number should be displayed.

// 2. when user clicks an operator button, it should be stored in a variable, current operator.

// 3. when user clicks a number after the operator button, it should be stored seperately from the first one.
// 3a) this number should now replace the first number in the display.

// 4. when user clicks =, it should calculate the new number using the 3 variable inputs from the user.
// 4a). when user clicks a number after =, it should clear the old values and take the number as its first value to operate with.
// 4b). when user clicks an operator button after =, it should use the previously calculated number as the first value to operate with.
// 4c). whichever number it is should be displayed

// 5. if instead the user clicks an operator button after steps 1-3: the 3 values should be used to calculate a new number, and the currentOperator should be updated

let calc = {
    add: function (a, b) {return a + b},
    subtract: function (a, b) {return a - b},
    multiply: function (a, b) {return a * b},
    divide: function (a, b) {return a / b}, 
    calculate: function () {
        return calc[this.operator](Number(this.previousNum),Number(this.currentNum)).toString();
    },
    clear: function(){
        this.currentNum = ''; 
        this.previousNum = ''; 
        this.result = '';
        this.currentOperator = '';
        
        
    },
    currentNum: '',
    previousNum: '',
    operator: '',
    result: '',
    hasDecimal: false,
}

let displayValue = '';
let onScreenDisplay = document.querySelector('.display');
function updateDisplay (passInDaNumba) {
   displayValue += passInDaNumba
   onScreenDisplay.textContent = displayValue;
}
 
const allNumberButtons = document.querySelectorAll('.digit');
allNumberButtons.forEach(button => {
  button.addEventListener('click', (e)=> {
      if(calc.currentNum.includes('.') && e.target.id === '.'){return}
      if(calc.result) {
          calc.clear();
          displayValue = '';
      }
      updateDisplay(e.target.id);
      calc.currentNum += e.target.id;
  });
});

const allOperatorButtons = document.querySelectorAll('.operator');
allOperatorButtons.forEach(button => {
    button.addEventListener('click', (e) => { 
        if (calc.result){
            calc.currentNum = calc.result;
            calc.result = '';
        }
        if (!calc.operator){
        calc.operator = e.target.id;
        calc.previousNum = calc.currentNum;
        calc.currentNum = '';
        displayValue = '';
    } else if (calc.operator){
        calc.previousNum = calc.calculate();
        displayValue = '';
        calc.currentNum = '';
        updateDisplay(calc.previousNum);
        displayValue = '';
        calc.operator = e.target.id;
    }
});
})

const equalsOperatorBtn = document.querySelector('#equals');
equalsOperatorBtn.addEventListener('click', ()=> {
    if (calc.currentNum && calc.previousNum && calc.operator){
        calc.result = calc.calculate();
        calc.operator = '';
        displayValue = '';
        updateDisplay(calc.result);
    }
})

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', ()=> {
    calc.clear();
    displayValue = '';
    updateDisplay('0');
    displayValue = '';
});

const modifyPlusMinusBtn = document.querySelector('#plusMinus');
modifyPlusMinusBtn.addEventListener('click', ()=>{
    calc.currentNum = (Number(calc.currentNum)*-1).toString();
    displayValue = '';
    updateDisplay(calc.currentNum);
})

const percentBtn = document.querySelector('#percent');
percentBtn.addEventListener('click', ()=>{
    calc.currentNum = (Number(calc.currentNum)/100).toFixed(2).toString();
    displayValue = '';
    updateDisplay(calc.currentNum);
})






