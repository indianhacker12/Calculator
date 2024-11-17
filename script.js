let currentInput = '';
let operator = null;
let firstOperand = null;
let history = [];

// Append a number or decimal
function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

// Perform basic operations
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

// Calculate result
function calculate() {
  if (currentInput && operator && firstOperand !== null) {
    const result = calculateImmediateResult();
    history.push(`${firstOperand} ${operator} ${currentInput} = ${result}`);
    currentInput = result.toString();
    operator = null;
    firstOperand = null;
    updateDisplay(currentInput);
  }
}

// Calculate immediate result
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
  }

  return result;
}

// Clear display
function clearDisplay() {
  currentInput = '';
  operator = null;
  firstOperand = null;
  updateDisplay('');
}

// Backspace
function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
}

// Update display
function updateDisplay(value) {
  document.getElementById('display').value = value || '0';
}

// Toggle History Modal
function toggleHistory() {
  const modal = document.getElementById('historyModal');
  modal.classList.toggle('hidden');
  if (!modal.classList.contains('hidden')) {
    renderHistory();
  }
}

// Render history in modal
function renderHistory() {
  const historyList = document.getElementById('historyList');
  if (history.length === 0) {
    historyList.innerHTML = '<p>No history available.</p>';
  } else {
    historyList.innerHTML = history
      .map((entry, index) => `<p>${index + 1}. ${entry}</p>`)
      .join('');
  }
}
