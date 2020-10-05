$(function() { // Same as document.addEventListener("DOMContentLoaded"...)

    // Same as document.querySelector("#navbarToggle").addEventListener("blur",...)
    $("#navbar-toggle").blur(function(event) {
            var screenWidth = window.innerWidth;
            if (screenWidth < 768)
                $("#collapsable-nav").collapse('hide');
        }
    )

});
