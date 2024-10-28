const buttons = document.querySelectorAll(".inputButton");
const display = document.querySelector(".display");
const decimal = document.querySelector("#decimal");
// const multiply = document.querySelector("#multiply");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equal");

const numbers = {
  firstNumber: [],
  secondNumber: null,
  functionButton: null,
};

const operationFunctions = ["+", "-", "*", "/", "DE", "AC", "="];
let firstNumber = [];
let secondNumber = [];
let decimalValue = ".";
let operatorValue = null;

decimal.addEventListener("click", (e) => {
  if (!firstNumber.includes(e.target.innerText)) {
    firstNumber.push(e.target.innerText);
    console.log(firstNumber);
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let selectedNumValue = e.target.innerText;
    // if operator is empty add selected numbers to first number
    if (selectedNumValue) {
      firstNumber.push(selectedNumValue);
    }

    // if operator and first number
    // if (operatorValue && firstNumber) {
    //   secondNumber.push(selectedNumValue);
    //   console.log(`logging  second number ${secondNumber}`);
    // } else {
    //   firstNumber.push(selectedNumValue);
    //   console.log(`logging  first number ${firstNumber}`);
    // }
    // console.log(firstNumber);
    display.innerText = firstNumber;
  });
});

// multiply.addEventListener("click", (e) => {
//   if (firstNumber.length) {
//     operatorValue = e.target.innerText;
//     console.log("ready");
//   } else {
//     console.log("not ready");
//   }
// });

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    let currentOperator = e.target.innerText;
    if (firstNumber.length) {
      operatorValue = currentOperator;
      console.log("first number chosen");
    }

    // console.log(operator);
  });
});

equals.addEventListener("click", (e) => {
  if (e.target.innerText === "=") {
    operateOnArrays(firstNumber, secondNumber, operatorValue);
    // console.log(operateOnArrays(firstNumber, secondNumber, operator));
  }
});

function operateOnArrays(array1, array2, operator) {
  // Join the numbers in each array to form single numbers
  const num1 = Number(array1.join(""));
  const num2 = Number(array2.join(""));

  // Perform the operation based on the operator
  switch (operator) {
    case "+":
      console.log(num1 + num2);
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}
