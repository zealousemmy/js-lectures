var myForm = document.forms.myForms;
var message = document.getElementById("message");

myForm.onsubmit = function(){
    if(myForm.name.value == "" || myForm.sex.value == "" || myForm.location.value =="" || myForm.contact.value==""){
        message.innerHTML = "Fill in all fields";
        return false;
    }else{
        message.innerText = "";
        return true;
        
    }

};







