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
    // if secondNumber is empty add to the first number
    if (!secondNumber.length) {
      firstNumber.push(selectedNumValue);
    }
    display.innerText = firstNumber;
  });
});

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
