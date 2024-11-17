let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
  // Append the number to the current input
  currentInput += number;
  updateDisplay(currentInput);
}

function performOperation(op) {
  if (currentInput) {
    if (firstOperand === null) {
      firstOperand = parseFloat(currentInput);
    } else {
      firstOperand = calculateImmediateResult();
    }
    operator = op;
    currentInput = '';
  }
}

function calculate() {
  if (currentInput && operator && firstOperand !== null) {
    const result = calculateImmediateResult();
    currentInput = result.toString();
    operator = null;
    firstOperand = null;
    updateDisplay(currentInput);
  }
}

function calculateImmediateResult() {
  const secondOperand = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    case '%':
      result = firstOperand % secondOperand;
      break;
    default:
      result = secondOperand;
  }

  return result;
}

function clearDisplay() {
  currentInput = '';
  operator = null;
  firstOperand = null;
  updateDisplay('');
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  document.getElementById('display').value = value || '0';
}
