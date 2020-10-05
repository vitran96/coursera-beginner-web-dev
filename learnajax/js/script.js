// Event handling
document.addEventListener("DOMContentLoaded",
    function(event) {
        document.querySelector("button")
            .addEventListener("click",
                function() {
                    var self = this;
                    var name = "";

                    // Call server to get the name
                    $ajaxUtils.sendGetRequest("./data/name.txt",
                        function (request) {
                            self.name = request.responseText;

                            // console.log(self.name);
                            document.querySelector("#content")
                                .innerHTML = "<h2>Hello " + self.name + "!";
                        }
                    );

                    // The line below might fail because sendGetRequest is Async => Hence Hello will print before self.name got update.
                    // document.querySelector("#content")
                    //     .innerHTML = "<h2>Hello " + self.name + "!";
                }
            );
    }
);