class Calculator {
  constructor() {
    this.clear();
  }

  clear() {
    this.current = '';
    this.operator = null;
    this.operand = '';
    this.result = null;
  }

  inputNumber(num) {
    if (this.operator === null) {
      this.current += num;
    } else {
      this.operand += num;
    }
  }

  inputOperator(op) {
    if (this.current === '') return;
    if (this.operator !== null && this.operand !== '') {
      this.calculate();
      this.current = this.result.toString();
      this.operand = '';
    }
    this.operator = op;
  }

  calculate() {
    const a = parseFloat(this.current);
    const b = parseFloat(this.operand);
    switch (this.operator) {
      case '+':
        this.result = a + b;
        break;
      case '-':
        this.result = a - b;
        break;
      case '*':
        this.result = a * b;
        break;
      case '/':
        this.result = b !== 0 ? a / b : 'Error';
        break;
      default:
        this.result = this.current;
    }
    this.current = this.result.toString();
    this.operator = null;
    this.operand = '';
  }

  getDisplay() {
    if (this.operand !== '') return this.operand;
    return this.current;
  }
}

const calc = new Calculator();

function buttonClick(val) {
  const display = document.querySelector('input[name="display"]');
  if ((val >= '0' && val <= '9') || val === '.') {
    calc.inputNumber(val);
    display.value = calc.getDisplay();
  } else if (val === '+' || val === '-' || val === '*' || val === '/') {
    calc.inputOperator(val);
    display.value = '';
  } else if (val === '=') {
    calc.calculate();
    display.value = calc.getDisplay();
  }
}

function clearCalc() {
  const display = document.querySelector('input[name="display"]');
  calc.clear();
  display.value = '';
}

window.buttonClick = buttonClick;
window.clearCalc = clearCalc;