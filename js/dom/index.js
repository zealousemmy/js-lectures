// dom document Object Module

let divContainer = document.getElementById("container");
let h1Text = document.querySelector("#text");
let user = document.getElementById("userName"); // html input element
let submitButton = document.querySelector("#submit");

function getUser() {
  let userName = user.value;
  //   h1Text.innerHTML = "We are glad to have you" + " " + userName;
  h1Text.innerHTML = `We are glad to have you ${userName}`;
  document.write("submitted");
}
// calling the submit button from our html
// addEventListener expects the event it should listen "click" or "onhover" etc.
submitButton.addEventListener("click", getUser);

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
