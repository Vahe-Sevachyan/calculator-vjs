const buttons = document.querySelectorAll(".inputButton");
const valueDisplay = document.querySelector(".value-display");
const eqDisplay = document.querySelector(".eq-display");
const decimal = document.querySelector("#decimal");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equal");
const clearButton = document.querySelector("#AC");
const deleteButton = document.querySelector("#DE");
let firstNumber = [];
let secondNumber = [];
let decimalValue = ".";
let operatorValue = null;
let numOneActivated = false;
let numTwoActivated = false;

clearButton.addEventListener("click", () => {
  firstNumber = [];
  secondNumber = [];
  operatorValue = null;
  eqDisplay.innerText = "";
  valueDisplay.innerText = "";
});

deleteButton.addEventListener("click", () => {
  if (numOneActivated === true) {
    firstNumber.splice(-1);
    valueDisplay.innerText = firstNumber.join("");
    console.log(firstNumber);
  } else if (numTwoActivated === true) {
    secondNumber.splice(-1);
    valueDisplay.innerText = `${firstNumber.join(
      ""
    )} ${operatorValue}  ${secondNumber.join("")}`;
    console.log(secondNumber);
  }
});

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
      valueDisplay.innerText = `${firstNumber.join(
        ""
      )} ${operatorValue}   ${secondNumber.join("")}`;
      numOneActivated = false;
      numTwoActivated = true;
      console.log(firstNumber);
    } else {
      firstNumber.push(selectedNumValue);
      valueDisplay.innerText = firstNumber.join("");
      console.log("logging first number");
      numOneActivated = true;
      numTwoActivated = false;
    }
  });
});

//operator function for + - / *
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    let currentOperator = e.target.innerText;
    //operator value does not get chosen until firstNumber value is true
    if (firstNumber.length) {
      operatorValue = currentOperator;
      valueDisplay.innerText = `${firstNumber.join("")}   ${operatorValue}`;
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

  if (operator == "+") {
    eqDisplay.innerText = `${firstNumber.join(
      ""
    )} ${operatorValue}  ${secondNumber.join("")} =`;
    valueDisplay.innerText = `${num1 + num2}`;
    console.log("works");
  } else if (operator === "-") {
    eqDisplay.innerText = `${firstNumber.join(
      ""
    )} ${operatorValue}  ${secondNumber.join("")} =`;
    valueDisplay.innerText = `${num1 - num2}`;
  } else if (operator === "*") {
    eqDisplay.innerText = `${firstNumber.join(
      ""
    )} ${operatorValue}  ${secondNumber.join("")} =`;
    valueDisplay.innerText = `${num1 * num2}`;
  } else if (operator === "/") {
    eqDisplay.innerText = `${firstNumber.join(
      ""
    )} ${operatorValue}  ${secondNumber.join("")} =`;
    valueDisplay.innerText = `${num1 / num2}`;
  }
}
