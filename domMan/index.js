//const body = document.getElementById('body');
//body.style.backgroundColor = 'black';

// const title = document.getElementById('title');
// console.log('title');
// title.style.color = '#000';

// const header = document.getElementById('main-header');
// console.log('header');
// header.style.color = '#0fff';

// const listItems = document.getElementById('listItems');

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '5rem';
    
// }
// var firstUnOrderedList = document.getElementById('listItems');
// var myArray=['firstUnOrderedList'];
// myArray.forEach(function(item){
//     console.log(item);
//     item.style.fontSize='10rem';
// });

// const list = document.querySelector('#main-header');

// console.log(list.getAttribute('id'));

// li.classList.remove('listItems');
// console.log(li.classList.contains('listItems'));

// const ul = document.querySelector('ul');
// console.log(ul.childNodes);   
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.fontSize = '40px';
// ul.childNodes[1].style.backgroundColor = 'red';


//alert a content
const buttonTwo = document.querySelector('.btn-2');
function alertBtn(){
    alert('i love you');
}
buttonTwo.addEventListener("click", alertBtn);



//change background
const changeBgColor = document.querySelector('.box');
    
// changeBgColor.style.backgroundColor = 'green';

// function newBgColor(){
//     changeBgColor.addEventListener("onmouseover", changeBgColor);  
// }



changeBgColor.addEventListener("mouseover", function() {
    changeBgColor.style.backgroundColor = "green";
});