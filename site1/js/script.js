$(function() { // Same as document.addEventListener("DOMContentLoaded"...)

    // Same as document.querySelector("#navbarToggle").addEventListener("blur",...)
    $("#navbarToggle").blur(function(event) {
            var screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                $("#collapsable-nav").collapse('hide');
            }
        }
    )

    // $("#navbarToggle").click(function (event) {
    //     $(event.target).fo2cus();
    // });
});

(function(global) {
    var dc = {};

    var homeHtml = "snippets/home-snippet.html";
    var allCategoriesUrl = "http://davids-restaurant.herokuapp.com/categories.json";
    var categoriesTitleHtml = "snippets/categories-title-snippet.html";
    var categoryHtml = "snippets/category-snippet.html";

    // Convinience function for inserting innerHTML for 'select'
    var insertHtml = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHtml = html;
    }

    var showLoading = function(selector) {
        var html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    }

    var insertProperty = function(
        string,
        propName,
        propValue
    ) {
        var propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);

        return string;
    };

    document.addEventListener("DOMContentLoaded", function(event) {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function(responseText) {
                document.querySelector("#main-content")
                    .innerHTML = responseText;
            },
            false
        );
    })

    dc.loadMenuCategories = function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            allCategoriesUrl,
            buildAndShowCategoriesHtml,
            true
        )
    };

    // Build HTML for the categories page based on the data from the server
    function buildAndShowCategoriesHtml(categories) {
        // Load title snippet of categories page
        $ajaxUtils.sendGetRequest(
            categoriesTitleHtml,
            function(categoriesTitleHtml) {
                // Retrieve single category snippet
                $ajaxUtils.sendGetRequest(
                    categoryHtml,
                    function(categoryHtml) {
                        var categoriesViewHtml = buildAndShowCategoriesViewHtml(
                            categories,
                            categoriesTitleHtml,
                            categoryHtml
                        );

                        insertHtml("#main-content", categoriesViewHtml);
                    },
                    false
                );
            },
            false
        )
    }

    function buildAndShowCategoriesViewHtml(
        categories,
        categoriesTitleHtml,
        categoryhtml
    ) {
        var finalHtml = categoriesTitleHtml;
        finalHtml += '<section class="row">';

        for (var i = 0; i < categories.length; i++) {
            // Insert category values
            var html = categoryHtml;
            var name = "" + categories[i].name;
            var short_name = categories[i].short_name;
            html = insertProperty(html, "name", name);
            html = insertProperty(html, "short_name", short_name);
            finalHtml += html;
        }

        finalHtml += "</section>";
        return finalHtml;
    }

    global.$dc = dc;
})(window);
