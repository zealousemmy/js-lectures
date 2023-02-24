// dom document Object Module

let divContainer = document.getElementById("container");
let h1Text = document.getElementById("text");
let user = document.getElementById("userName"); // html input element
let submitButton = document.querySelector("#submit");
// let password = document.getElementById("password");

function getUsers() {
  let userName = user.value;
  // let password = password.value;
  h1Text.innerHTML = "We are glad to have you" + " " + userName;
  h1Text.innerHTML = `We are glad to have you ${userName}`;
  //document.write("submitted");
}
// calling the submit button from our html
// addEventListener expects the event it should listen "click" or "onhover" etc.
submitButton.addEventListener("click", getUsers);

function changeColor() {
  //   divContainer.style.background = "red"; 
  if (divContainer.className == "container") {
    divContainer.classList.add("bgRed");
  } else {
    divContainer.classList.remove("bgRed");
  }
  console.log("clicked me" + divContainer);
}
// changeDom();

const elem = getElementByClassName(".class-one");
console.log (elem);