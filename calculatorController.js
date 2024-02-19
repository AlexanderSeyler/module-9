class CalculatorController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.attachButtonListeners();
  }

  attachButtonListeners() {
    const buttons = document.querySelectorAll(
      '#calculator input[type="button"]'
    );
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.value;
        this.handleInput(value);
      });
    });
  }

  handleInput(value) {
    if (value === "=") {
      this.model.evaluate();
    } else if (value === "C") {
      this.model.clear();
    } else {
      this.model.addCharacter(value);
    }
    this.updateView();
  }

  updateView() {
    this.view.updateDisplay(this.model.getExpression());
  }
}

const model = new CalculatorModel();
const view = new CalculatorView();
const controller = new CalculatorController(model, view);
