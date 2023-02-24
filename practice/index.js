function manageEvents(){

var content = document.getElementById('content');
var button = document.getElementById('show-more');

button.onclick = function(){
    if(content.className == "open"){
        content.className ="";
        button.textContent = "Show More";
    }else{
        content.className = "open";
        button.textContent = "Show Less";
    }
}


const content2 = document.getElementById('content2');
const btn = document.getElementById('show-more2');
btn.onclick = function(){
    if(content2.className == "open" ){
        content2.className = "";
        btn.textContent = "Read More";
    }else{
        content2.className = "open";
        btn.textContent = "Read Less"
    }
};
}

window.onload = function(){
    manageEvents();
}

