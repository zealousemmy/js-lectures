let parentContainer = document.getElementById("index")
console.log(parentContainer)

console.log("working")
let H1 = document.createElement("h1")
console.log(h1)

H1.innerText = "Hello world";

let NavContainer = document.createElement("nav");
let anchorTag = document.createElement("a");

parentContainer.append(h1)

let navItems = [
    {text: "home", link:"/"},
    {text:"about", link:"/about"}, 
     {text: "contact", link:"/contact"}
]

let newItem = navItems.map((items) => {
   return items.text
})

console.log(newItem)
