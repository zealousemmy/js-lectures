let todo = document.getElementById("getTodo"); //Declare a variable

let addButton = document.getElementById("addButton");  //Declare a variable for the button
addButton.style.display="none" //style the button

//Add Event Listener
todo.addEventListener("keypress", () => {
    console.log(todo.value)
    if(todo.value.length >= 5){
        addButton.style.display="block"
    } 
    
})

let allTodos = [

];

function getTodoItems(){
    let todoItem = todo.value;
    todoItem.length >=5 ? allTodos.push(todoItem) : console.log("input empty")
    localStorage.setItem("todo-list", JSON.stringify(allTodos))
    console.log(allTodos)

}

let todoList = localStorage.getItem("todo-list")
let todoLists = JSON.parse(todoList)
console.log(todoLists)

addButton.addEventListener("click", getTodoItems)