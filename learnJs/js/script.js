// var x = "Hello World!";

// var message = "in global";
// console.log("global: message = " + message);

// var a = function() {
//     var message = "inside a";
//     console.log("a: message = " + message);
//     b();
// }

// function b() {
//     console.log("b: message = " + message);
// }

// a();

// var x;
// console.log(x);

// if (x == undefined)
//     console.log("x is undefined");

// x = 5;
// if (x == undefined)
//     console.log("x is undefined");
// else
//     console.log("x has been defined");

// var string = "Hello";
// string += " World";
// console.log(string + "!");

// console.log((5 + 4) / 3);
// console.log(undefined/5); // Return NaN

// var x = 4, y = 4;
// if (x == y)
//     console.log("x == y");

// x = "4";
// if (x == y)
//     console.log("x == y");

// if (x === y)
//     console.log("x == y");
// else
//     console.log("x != y");

// ALL FALSE condition
// if (false ||
//     null ||
//     undefined ||
//     "" ||
//     0 ||
//     NaN) {
//     console.log("Never executed line");
// }
// else
//     console.log("ALL FALSE")

// ALL TRUE
// if (true &&
//     "hello" &&
//     1 &&
//     -1 &&
//     "false") {
//     console.log("ALL TRUE");
// }

// function a()
// {
//     // INVALID because after 'return' there is no word -> JS VM will assume that there is nothing to return -> undefined
//     return
//     {
//         name: "Chris"
//     };
// }

// function b() {
//     return {
//         name: "Chris"
//     };
// }

// console.log(a());
// console.log(b());

// For loop
// var sum = 0;
// for (var i = 0; i < 10; i++) {
//     sum = sum + i;
// }

// console.log("sum from 0 to 9 is: " + sum);

// Default value
// function orderChickenWith(sideDish) {
//     // if (sideDish === undefined)
//     //     sideDish = "whatever!";
//     sideDish = sideDish || "whatever!"; // Return the value that is TRUE
//     console.log("Chicken with " + sideDish);
// }

// orderChickenWith("noddles");
// orderChickenWith();

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark"; // INVALID! ceo not defined
// company.ceo.favColor = "blue";

// console.log(company);

// function test() {
//     console.log(this);
//     this.myName = "Chris";
// }

// test();
// console.log(window.myName);

// FUNCTION CONSTRUCTOR
// function Circle (radius) {
//     this.radius = radius;
    // this.getArea... will be create every time new Circle is used
    // this.getArea = function() {
    //     return Math.PI * Math.pow(this.radius, 2);
    // }
    // console.log(this);
    // return {}; // => this will return Object{}
// }

// Prototype to make internal function not create again every single time
// Circle.prototype.getArea = function() {
//     return Math.PI * Math.pow(this.radius, 2);
// }

// var myCircle = new Circle(10); // OBJECT of a name Circle
// var myCircle = Circle(10); // Use Circle as regular function. Nothing to return so return "undefined"
// console.log(myCircle);
// console.log(myCircle.getArea());

// var literalCircle = {
//     radius: 10,

//     getArea: function() {
//         // console.log(this);
//         var self = this;
//         var changeRadius = function() {
//             this.radius = 20; // THIS is WINDOWS, not literalCircle
//             self.radius = 50; // SELF is actually the current literalCircle
//         }
//         changeRadius();
//         console.log(this.radius); // THIS is the current literalCircle
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// }

// console.log(literalCircle.getArea());
