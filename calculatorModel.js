class CalculatorModel {
  constructor() {
    this.expression = "";
  }

  addCharacter(char) {
    this.expression += char;
  }

  clear() {
    this.expression = "";
  }

  evaluate() {
    try {
      this.expression = eval(this.expression);
    } catch (error) {
      this.expression = "Error";
    }
  }

  getExpression() {
    return this.expression;
  }
}
