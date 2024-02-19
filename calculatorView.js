class CalculatorView {
  constructor() {
    this.display = document.getElementById("display");
  }

  updateDisplay(value) {
    this.display.value = value;
  }
}
