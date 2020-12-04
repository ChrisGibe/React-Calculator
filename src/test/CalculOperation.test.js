import CalculOperation from "../calculOperation/CalculOperation";
const calc = new CalculOperation();

function pressButtons(buttons) {
  let value = 0;
  buttons.forEach((button) => {
    value = calc.calculate(button, value);
  });

  return value;
}

function expectButtons(buttons, expectation) {
  expect(pressButtons(buttons)).toEqual(expectation);
  calc.reset();
}

it("should show 6 on display", () => {
  expectButtons(["6"], "6");
});

it("should show 65 on display", () => {
  expectButtons(["6", "5"], "65");
});

it("should support 6 + 5 and show 5 on display", () => {
  expectButtons(["6", "+", "5"], "5");
});

it("should support addition", () => {
  expectButtons(["6", "+", "9", "="], 15);
});

it("should support subtraction", () => {
  expectButtons(["15", "-", "9", "="], 6);
});

it("should support nultiplication", () => {
  expectButtons(["6", "*", "9", "="], 54);
});

it("should support division", () => {
  expectButtons(["63", "/", "9", "="], 7);
});

it("should support Clear", () => {
  expectButtons(["C"], 0);
});
