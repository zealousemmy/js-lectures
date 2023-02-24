// const myCar = {
//         maxSpeed : 80,
//         driver : "James",
//         color : "Navy Green",
//         drive : function(speed, time){
//             console.log(speed * time);  
//         }
//     };

// console.log(myCar.maxSpeed);
// myCar.drive(50,3);
// console.log(myCar.driver,  myCar.color);

//Decleare Variable
var Car = function(maxSpeed, driver, age, location){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.age = age;
    this.location = location;


    //intanstiate the variable
    this.driveVelocity = function(speed, time){
        console.log(speed * time);
    };

    this.driverName = function(){
        console.log("this driver name is " + this.driver);
    };

    this.driverAge = function(){
        console.log("This driver age is " + this.age + "years");
    };

    this.driverLocation = function(){
        console.log("His location is " + this.location);
    }


}

//assign a value to the variable
var myCar = new Car(70, "Satnley Amaziro");
var myCar1 = new Car(50, "Satnley Johna");
var myCar2 = new Car(60, "Lugard Amaziro");
var myCar4 = new Car(29, "checking man", 34,);
var myCar5 = new Car(29, "checking man", 34, "Nigeria");



//call the variable
myCar.driveVelocity(30, 5);
myCar2.driverName();
myCar4.driverAge();
myCar4.driverName(); 
myCar5.driverLocation();


