// This will fail because this script load before the html page
//console.log(document.getElementById("title"));

//console.log(document instanceof HTMLDocument);

function sayHello() {

    // Normally 'this' in function should point to global context (window)
    console.log(this);

    var name = document.getElementById("name").value;
    //var message = "Hello " + name + "!";
    var message = "<h2>Hello " + name + "!</h2>"; // This is literal string, not work with textContent

    //document.getElementById("content").textContent = message;

    document.getElementById("content").innerHTML = message;

    if (name === "student") {
        var title = document.querySelector("#title").textContent;
        title += " & Lovin' it!";

        document.querySelector("#title").textContent = title;
    }
}

// Unobstrusive event binding
// This will bind sayHello into the 'button' element.
// Now, 'this' will show button.
// document.querySelector("button").addEventListener("click", sayHello);

// This will work as above addEventListener
document.querySelector("button").onclick = sayHello;