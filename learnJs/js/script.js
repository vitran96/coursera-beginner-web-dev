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
if (false ||
    null ||
    undefined ||
    "" ||
    0 ||
    NaN) {
    console.log("Never executed line");
}
else
    console.log("ALL FALSE")
