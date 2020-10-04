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

<<<<<<< HEAD
// Create object literal
// var facebook = {
//     name: "Facebook",
//     ceo: {
//         firstName: "Mark",
//         favColor: "blue"
//     },
//     $stock: 110,
//     "stock of company": 110
// };

// console.log(facebook);

// function mult(x, y) {
//     return x * y;
// }

// console.log(mult(5, 3));
// mult.version = "v.1.0.0";

// console.log(mult.version);
// console.log(mult.toString());

// function makeMultiplier(multiplier) {
//     var myFunc = function (x) {
//         return multiplier * x;
//     };

//     return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// function doOperation(x, operation) {
//     return operation(x);
// }

// var result = doOperation(5, multiplyBy3);
// console.log(result);

// Arrays
// var array = new Array();
// array[0] = "Chris";
// array[1] = 2;
// array[2] = function(name) {
//     console.log("Hello " + name);
// };
// array[3] = {course: "Html, CSS & JS"};

// console.log(array);

// Short hand array creation
// var names = ["Chris", "Hao", "Duy"];
// console.log(names);

// for (var i = 0; i < names.length; i++)
// {
//     console.log(names[i]);
// }

// names[100] = "Khang";

// var names2 = ["Chris", "Hao", "Duy"];

// var myObj = {
//     name: "Chris",
//     course: "HTML/CSS/JS",
//     platform: "Coursera"
// };

// for (var prop in myObj)
// {
//     console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2)
// {
//     console.log("Hello " + names[name]);
// }

// Closures
// function makeMult(multiplier) {
//     function b() {
//         console.log("Multiplier is " + multiplier);
//     }
//     b();

//     return (
//         function(x) {
//             return multiplier * x;
//         }
//     );
// }

// var doubleAll = makeMult(2);
// console.log(doubleAll(10));

// Below will conflict with script2.js
// var name = "Chris";
// function sayHello() {
//     console.log("Hello " + name);
// }

// Fake namespace
// var chrisGreeter = {};
// chrisGreeter.name = "Chris";
// chrisGreeter.sayHello = function() {
//     console.log("Hello " + chrisGreeter.name);
// };

(function(window) {
    var chrisGreeter = {};
    chrisGreeter.name = "Chris";
    var greeting = "Hello ";
    chrisGreeter.sayHello = function() {
        console.log(greeting + chrisGreeter.name);
    };

    window.chrisGreeter = chrisGreeter;
})(window);
=======
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
>>>>>>> e7286956b63da065acb9eb816b064f89f60128d9
