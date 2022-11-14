// array methods

let arrOne = ["Jessy", 1, 34, true, null];
arrOne.push({ name: "Emeka" }); // adds an item to at the end of the array
console.log(arrOne);
arrOne.pop(); // removes the last item in an array
console.log(arrOne);
arrOne.unshift("kleee"); // adds a value at the beggining of an array
console.log(arrOne);
arrOne.shift(); // removes an item from the beginning of an array
console.log(arrOne);
arrOne.splice(3, 0, "one", "two", "three"); // with the splice method we can add, remove, items from an array
// console.log(arrOne);
let person = "John";
arrOne.push(["hello"]);
let newArr = arrOne.concat(person, [{ newPerson: "kdjdkjsdjd" }]);
// console.log(newArr);

// let getItems = arrOne.forEach(function (ab) {

// });
let studentFields = [
  "Emekao",
  "Miracle",
  "Joseph",
  "Daniel",
  "Joseph",
  { name: "Joseph" },
];
// let findOne = studentFields.find("Joseph");
// console.log(findOne);
let findValue = studentFields.find(function (item) {
  if (item === "Joseph") {
    console.log(item);
  } else {
    console.log("not found");
  }
});

let findStudent = studentFields.findIndex((item) => {
  console.log(item.name === "Joseph");
});
