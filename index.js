// // var, let, const
// // let a = "aaa";

// // a = "bbb";
// // console.log(a);
// // data types
// // strings, numbers, boolean, objects, array, null, undefined
// // let person = "John"; // string
// // let numOne = 2; // number
// // let isTrue = true; // boolean
// // let isFalse = false; // boolean
// // let unKnown;

// // interactions
// // alert("welcome to website");
// // prompt("what's your name"); // comes along with input field
// // let doc = document.getElementById("document"); // gets an element by id
// // let doc3 = document.getElementsByClassName("document"); // get an element by class

// // type conversation
// // let isTrue = true;
// // console.log(isTrue);
// // // converting boolean to a string
// // let trueText = String(isTrue); // String() converts an item to a string
// // let numOne = Number(isTrue); // Number() converts a value to a number
// // let empty = "2";
// // let numBoolean = Number(empty); // Boolean() converts a value to a boolean
// // console.log(trueText);
// // console.log(numOne);
// // console.log(numBoolean);

// // let calculate = 12 + Number(empty);
// // console.log(calculate);
// // comparison
// // let password = "123456789";
// // let confirmPassword = "123456789";
// // let checkPassword =
// //   password === confirmPassword
// //     ? console.log("account created successfully")
// //     : console.log("error");
// // console.log(checkPassword);
// // if (password !== confirmPassword) {
// //   console.log("account created successfully");
// // } else {
// //   console.log("password doesn't match");
// // }
// // let user;
// // let userEmail = "zealous@gmail.com";
// // let number = 090999099099;

// // if (userEmail || number) {
// //   user = userEmail;
// //   console.log(user);
// // }
// // let ok = "klksldkld";
// // let ab = 1;
// // while (ab < 10) {
// //   console.log(a + 1);
// // }
// // let personName = "emeka";
// // let phone = "090878787871";
// // let password = "99w9q09w0kjkdjskjd";
// // function createUser() {
// //   if (personName.length >= 4 && phone.length >= 10 && password.length >= 8) {
// //     let newPhone = Number(phone);
// //     console.log(
// //       `Account created successfully and your name is ${personName} ${phone}`
// //     );
// //     phone = newPhone;
// //     console.log(typeof phone);
// //   } else {
// //     console.log("all fields are required");
// //   }
// // }

// // let loginUser = (userName, password) => {
// //   if (userName === "john" && password === "john2222") {
// //     console.log("login successful");
// //   } else {
// //     console.log("wrong credentials");
// //   }
// // };
// // let addNum = function (a, b) {
// //   console.log(Number(a) + Number(b));
// // };
// // addNum("2", 7)
// // loginUser("john", "john2222");

// // let studentData = {
// //   name: "John",
// //   age: 18,
// //   gender: "male",
// //   greet: function () {
// //     console.log("welcome");
// //   },
// // };
// // console.log(studentData);
// // delete studentData.age;
// // console.log(studentData);

// // studentData.sayHi = function () {
// //   console.log(this.name + " " + "is saying" + " " + "hi");
// // };
// // studentData.sayHi();

// // arrays

// // push method
// // let addItem = studentDb.push({ name: "Joshua", age: 16 });
// // console.log(studentDb);
// // studentDb.push("graduate");
// // console.log(studentDb);
// // studentDb.pop();
// // console.log(studentDb);

// // studentDb.unshift("1");
// // console.log(studentDb);
// // studentDb.shift();
// // studentDb.shift();
// // console.log(studentDb);
// // let a = studentDb.slice(2, 4); // copys extracted value into a new array
// let studentDb = ["John", 7, { name: "Mary", class: "jss3" }, true, null, 90];
// console.log(studentDb[3]);

// studentDb.splice(2, 3); // works directly on the array
// console.log(studentDb);

// // concat

// let arrOne = ["john", "mary", "julliet"];
// let arrTwo = ["rose", "Jane", "prince"];
// let addBothArrs = arrOne.concat(arrTwo);

// let workers = [
//   { name: "john", position: "secretary", age: 30, salary: 400 },
//   { name: "jude", position: "accountant", age: 25, salary: 450 },
//   { name: "jessy", position: "security", age: 25, salary: 350 },
//   { name: "mary", position: "front desk", age: 24, salary: 350 },
//   { name: "mary", position: "surpervisor", age: 50, salary: 400 },
// ];
// // let addOneToAll = addBothArrs.forEach((item) => {
// //   if (item === "john") {
// //     console.log(item);
// //   }
// // });
// let highestPaid = workers.forEach((staff) => {
//   if (staff.salary >= 400) {
//     console.log(`staffs paid upto 400 are ${staff.name}`);
//   }
// });
// // [21:35, 11/7/2022] Odugwu Stan: //multiplication
// // function multiply(x,y){
// //     total = x * y;
// //     return total;
// // }
// // [21:35, 11/7/2022] Odugwu Stan: // console.log (multiply(2, 4));

// // division
// function division(a, b) {
//   return a / b;
// }
// // division(8, 2);

// //Multipy
// function minus(c, d) {
//   return c - d;
// }

// function multiply(c, d) {
//   return c * d;
// }
// // minus(2, 4);

// //percent
// function percent(s, t) {
//   return s % t;
// }
// percent(4, 8);

// function calculateValue(calculateType, a, b) {
//   if (calculateType === "multiply") {
//     console.log(multiply(a, b));
//   } else {
//     console.log("not found");
//   }
// }
// calculateValue("multiply", 2, 4);

