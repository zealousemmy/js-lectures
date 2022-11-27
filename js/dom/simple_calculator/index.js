const getInputValues = document.querySelector("#getValue");
// console.log((getInputValues.value = "hey"));
const calculateButton = document.getElementById("calculate");
const valueDisplay = document.querySelector("#displayValue");
function calculate() {
  console.log("from calculate button");
}
// calculateButton.addEventListener("click", calculate);
// or
calculateButton.addEventListener("click", function () {
  // eval function evaluates values
  let inputValue = getInputValues.value; // getting the value of the input tag
  let a = eval(inputValue); // evaluating or calculating the contents inside the input tag
  // valueDisplay is the h6 element in our html. the variable was declared in line four
  valueDisplay.innerHTML = a; // displaying the calculated value
  console.log(a);
  getInputValues.value = "";
});
// let buttonText = document.querySelectorAll("button");
// or
// calculateButton.addEventListener("click", () => {
//   console.log("from calculate button");
// });
let bodyMode = document.getElementById("body");
function changeMode() {
  if (bodyMode.className === "light-mode") {
    bodyMode.classList.add("dark-mode");
  } else {
    bodyMode.classList.remove("dark-mode");
  }
}

// buttons variables
let buttonOne = document.querySelector("#one").addEventListener("click", () => {
  console.log(1);
  getInputValues.value += 1;
});
let buttonTwo = document.querySelector("#two").addEventListener("click", () => {
  console.log(1);
  getInputValues.value += 2;
});
let buttonThree = document
  .querySelector("#three")
  .addEventListener("click", () => {
    console.log(1);
    getInputValues.value += 3;
  });
let buttonFour = document
  .querySelector("#four")
  .addEventListener("click", () => {
    console.log(1);
    getInputValues.value += 4;
  });
let buttonFive = document
  .querySelector("#five")
  .addEventListener("click", () => {
    console.log(1);
    getInputValues.value += 5;
  });
let buttonSix = document.querySelector("#six").addEventListener("click", () => {
  console.log(1);
  getInputValues.value += 6;
});
let buttonSeven = document
  .querySelector("#seven")
  .addEventListener("click", () => {
    console.log(1);
    getInputValues.value += 7;
  });
let buttonEight = document
  .querySelector("#eight")
  .addEventListener("click", () => {
    console.log(1);
    getInputValues.value += 8;
  });
let buttonNine = document
  .querySelector("#nine")
  .addEventListener("click", () => {
    console.log(1);
    getInputValues.value += 9;
  });
let buttonZero = document
  .querySelector("#zero")
  .addEventListener("click", () => {
    console.log(1);
    getInputValues.value += 0;
  });
let buttonPlus = document
  .querySelector("#addition")
  .addEventListener("click", () => {
    console.log(1);
    getInputValues.value += "+";
  });
let buttonMinus = document
  .querySelector("#minus")
  .addEventListener("click", () => {
    console.log(1);
    getInputValues.value += "-";
  });
let buttonDivide = document
  .querySelector("#divide")
  .addEventListener("click", () => {
    console.log(1);
    getInputValues.value += "/";
  });
let buttonMultiply = document
  .querySelector("#multiply")
  .addEventListener("click", () => {
    console.log(1);
    getInputValues.value += "*";
  });
let clear = document.querySelector("#clear").addEventListener("click", () => {
  console.log(1);
  getInputValues.value = " ";
});
