let display = document.getElementById("display");
let fullName = document.getElementById("fName");
let userName = document.getElementById("uName");
let userAge = document.getElementById("uAge");
let userAddress = document.getElementById("uAddress");
let userPassword = document.getElementById("uPassword");
let submitButton = document.querySelector("#submit");
let h1Text = document.getElementById("text");

function userInfo() {
  let fName = fullName.value;
  let uName = userName.value;
  let uAge = userAge.value;
  let uAddress = userAddress.value;
  let uPassword = userPassword.value;

  h1Text.innerHTML = `Welcome, let's create magic ${fName}`;
}

submitButton.addEventListener("click", userInfo);

function changeColor() {
  if (display.className == "display") {
    display.classList.add("bgGreen");
  } else {
    display.classList.remove("bgGreen");
  }
  console.log("clicked me" + display);
}
