const buttons = document.querySelectorAll(".inputButton");
const display = document.querySelector(".display");
const decimal = document.querySelector("#decimal");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equal");

let firstNumber = [];
let secondNumber = [];
let decimalValue = ".";
let operatorValue = null;

//check if decimal does not exist, if it does not then add decimal
decimal.addEventListener("click", (e) => {
  if (!firstNumber.includes(e.target.innerText)) {
    firstNumber.push(e.target.innerText);
    console.log(firstNumber);
  }
});

//function for selecting numbers
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let selectedNumValue = e.target.innerText;

    if (operatorValue && firstNumber.length) {
      secondNumber.push(selectedNumValue);
      console.log("logging second number");
    } else {
      firstNumber.push(selectedNumValue);
      console.log("logging first number");
    }

    // if (secondNumber.length == 0) {
    //   firstNumber.push(selectedNumValue);
    // } else if (!operatorValue === null && !firstNumber.length === 0) {
    //   secondNumOperation();
    // }
    // if secondNumber is empty add to the first number

    display.innerText = firstNumber;
    // if (!secondNumber.length) {

    // }
  });
});

function secondNumOperation() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let selectedNumValue = e.target.innerText;
      if (firstNumber && operatorValue) {
        secondNumber.push(selectedNumValue);
        console.log("adding to second number");
      }
    });
  });
}

//operator function for + - / *
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    let currentOperator = e.target.innerText;
    //operator value does not get chosen until firstNumber value is true
    if (firstNumber.length) {
      operatorValue = currentOperator;
      console.log("first number chosen");
    }
  });
});

//checks if equal sign was clicked
equals.addEventListener("click", (e) => {
  if (e.target.innerText === "=") {
    operateOnArrays(firstNumber, secondNumber, operatorValue);
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
