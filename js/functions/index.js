// // a function is a block of code that performs a specific tasks
// // the function key word helps us to indicate we are writing a function
// // the function name is greet and requires a bracket "()"

const { getActionFromState } = require("@react-navigation/native");

// // this is a function declaration.
// function greet() {
//   // what you want the function to do
//   console.log("welcome");
// }

// // let's create a function to calculate two numbers

// function addNum(a, b) {
//   // a, b are parameters, which means the function will expect two values b4 running
//   console.log(a + b);
// }

// // for a function to run, it needs to be triggered or invoked. just like below
// addNum(2, 5); // we have invoked the function. out is going to be 7

// // function expression
// let displayUser = function (userDetail) {
//   console.log(`hey welcome ${userDetail}`);
// };

// // we can invoked the function below
// displayUser("zealsDevs");

// // using the arrow function
// const validateUser = (username) =>{
//     if(username === "John"){
//         console.log("username is correct")
//     }else{
//         console.log("wrong username")
//     }
// }

// function declaration

// function change(){
//     console.log("function running")
// }

// let getValue= document.getElementById("input");
// let container= document.querySelector("#container");
// console.log(getValue.value)

// // getValue.addEventListener("change", ()=>{
// //     console.log(getValue.value)
// // })

// let details = ["kelvin", "28", 28, "doctor", "developer", "jamasoft"]
// let clickBtn = document.getElementById("click")

// getValue.addEventListener("keydown", () => {
    
//     if(details.includes(getValue.value)){
//         console.log(getValue.value)
//     }else{
//         console.log("details not found")
//     }
    
// })


// clickBtn.addEventListener("click", ()=> {
//     console.log("jkhkhdjshsjhj")
//     // console.log(getValue.value)
// })
// // arrow functions 

// let displayValue = (value) => {
    
// }
 
// // function expression

// let removeUser = function(){
    
// }

// for ( purchase = 6; purchase < 10; purchase++) {
//   alert("Success");
  
// }
//   alert("failed");

// var link = document.getElementsByTagName("a");
// for (let index = 1; index < link.length; index++) {
//   document.write("This is link" + index ); 
  
// }
//   alert("Looping Finshed");

//   function averageNum(a,b){
//     const average = (a + b)/2;
//     console.log(average);
//   }
//   averageNum(2,5);

// var num1 
// var num2 
// var num = num1 + num2;
// function calNum(num1, num2) {
//   console.log(num);
// }
// calNum(2,3);


  
function calNum(num1, num2) {
  return num1 + num2;
}
var calNum = (2,2);

document.write (calNum);


myPastDate = new Date(1213, 2, 3);
myFutureDate = new Date(3512, 3, 2);
 console.log(myPastDate);
 document.write(myFutureDate);

 birthday = new Date(2128, 2, 3);
 console.log(birthday.getYear());

 getFullYear();
 