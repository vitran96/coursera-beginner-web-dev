// This will fail because this script load before the html page
//console.log(document.getElementById("title"));

//console.log(document instanceof HTMLDocument);

function sayHello() {
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

