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
