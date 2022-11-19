// objects are non primitive data type. they can hold more than one value
// objects requires a key and value pair
let studentData = {
  name: "John",
  age: 18,
  gender: "male",
  isAStudent: false,
  complain: null,
};

// getting a value from an object
console.log(studentData.name); // output here is John
let studentName = studentData.name;

// deleting something inside of an object
delete studentData.complain;
