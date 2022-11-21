let display = document.getElementById("display");
let fullName = document.getElementById("fName");
let userName = document.getElementById("uName");
let userAge = document.getElementById("uAge");
let userAddress = document.getElementById("uAddress");
let userPassword = document.getElementById("uPassword");
let submitButton = document.querySelector("#submit");

function userInfo(){
    let fName = fName.value;
    let uName = uName.value;
    let uAge = uAge.value;
    let uAddress = uAddress.value;
    let uPassword = uPassword.value;

    h1Text.innerHTML = `Welcome, let's create magic ${fName}`;
}

submitButton.addEventListener("click", userInfo);

function changeColor(){
    if(display.className == "display"){
        display.classList.add("bgGreen");
    }else{
        display.classList.remove("bgGreen");
    }
    console.log("clicked me" + display);
}
