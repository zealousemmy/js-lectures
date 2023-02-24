var colorChanger = document.getElementById("color-changer");
var colours = ["red", "yellow", "blue", "pink"];
var counter = 0;

function changeColor(){
    colorChanger.style.background = colours[counter];
    counter++;
}

setInterval(changeColor, 3000);