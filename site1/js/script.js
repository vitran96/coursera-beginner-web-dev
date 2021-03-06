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

    let homeHtml = "snippets/home-snippet.html";

    let allCategoriesUrl = "https://davids-restaurant.herokuapp.com/categories.json";
    let categoriesTitleHtml = "snippets/categories-title-snippet.html";
    let categoryHtml = "snippets/category-snippet.html";

    let menuItemsUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
    let menuItemsTitleHtml= "snippets/menu-items-title.html";
    let menuItemHtml = "snippets/menu-item.html";

    // Convinience function for inserting innerHTML for 'select'
    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    var showLoading = function (selector) {
        var html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };

    var insertProperty = function(string, propName, propValue) {
        var propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);

        return string;
    };

    // TODO: this part can be improved
    var switchMenuToActive = function() {
        // Remove Active from HOME
        var classes = document.querySelector("#navHomeButton").className;
        classes = classes.replace(new RegExp("active", "g"), "");
        document.querySelector("#navHomeButton").className = classes;

        // Add Active to MENU
        classes = document.querySelector("#navMenuButton").className;
        if (classes.indexOf("active") == -1) {
            classes += " active";
            document.querySelector("#navMenuButton").className = classes;
        }
    }

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
    });

    dc.loadMenuCategories = function() {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            allCategoriesUrl,
            buildAndShowCategoriesHTML,
            true
        );
    };

    dc.loadMenuItems = function(cetegoryShort) {
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            menuItemsUrl + cetegoryShort,
            buildAndShowMenuItemsHTML,
            true
        );
    };

    // Build HTML for the categories page based on the data from the server
    function buildAndShowCategoriesHTML(categories) {
        // Load title snippet of categories page
        $ajaxUtils.sendGetRequest(
            categoriesTitleHtml,
            function (categoriesTitleHtml) {
            // Retrieve single category snippet
                $ajaxUtils.sendGetRequest(categoryHtml,
                    function (categoryHtml) {
                        switchMenuToActive();

                        var categoriesViewHtml = buildCategoriesViewHtml(
                            categories,
                            categoriesTitleHtml,
                            categoryHtml
                        );
                        insertHtml("#main-content", categoriesViewHtml);
                },
                false);
          },
          false);
    }

    function buildCategoriesViewHtml(
        categories,
        categoriesTitleHtml,
        categoryHtml
    ) {
        let finalHtml = categoriesTitleHtml;
        finalHtml += '<section class="row">';

        for (let i = 0; i < categories.length; i++) {
            // Insert category values
            let html = categoryHtml;
            let name = "" + categories[i].name;
            let short_name = categories[i].short_name;
            html = insertProperty(html, "name", name);
            html = insertProperty(html, "short_name", short_name);
            finalHtml += html;
        }

        finalHtml += "</section>";
        return finalHtml;
    }

    function buildAndShowMenuItemsHTML(categoryMenuItems) {
        $ajaxUtils.sendGetRequest(
            menuItemsTitleHtml,
            function(menuItemsTitleHtml) {
                $ajaxUtils.sendGetRequest(
                    menuItemHtml,
                    function(menuItemHtml) {
                        switchMenuToActive();

                        let menuItemsViewHtml = buildMenuItemsViewHtml(
                            categoryMenuItems,
                            menuItemsTitleHtml,
                            menuItemHtml
                        );

                        insertHtml("#main-content", menuItemsViewHtml);
                    },
                    false
                );
            },
            false
        );
    }

    function buildMenuItemsViewHtml(
        categoryMenuItems,
        menuItemsTitleHtml,
        menuItemHtml
    ) {
        menuItemsTitleHtml = insertProperty(
            menuItemsTitleHtml,
            "name",
            categoryMenuItems.category.name
        );

        menuItemsTitleHtml = insertProperty(
            menuItemsTitleHtml,
            "special_instructions",
            categoryMenuItems.category.special_instructions
        );

        let finalHtml = menuItemsTitleHtml;
        finalHtml += "<section class='row'>";

        let menuItems = categoryMenuItems.menu_items;
        let catShortName = categoryMenuItems.category.short_name;

        for(var i = 0; i < menuItems.length; i++)
        {
            let html = menuItemHtml;
            html = insertProperty(
                html,
                "short_name",
                menuItems[i].short_name
            );
            html = insertProperty(
                html,
                "catShortName",
                catShortName
            );

            html = insertItemPrice(
                html,
                "price_small",
                menuItems[i].price_small
            );
            html = insertItemPortionName(
                html,
                "small_portion_name",
                menuItems[i].small_portion_name
            );

            html = insertItemPrice(
                html,
                "price_large",
                menuItems[i].price_large
            );
            html = insertItemPortionName(
                html,
                "large_portion_name",
                menuItems[i].price_small
            );

            html = insertProperty(
                html,
                "name",
                menuItems[i].name
            );
            html = insertProperty(
                html,
                "description",
                menuItems[i].description
            );

        // Add clearfix after every 2nd menu item
            if (i % 2 != 0)
                html += "<div class='clearfix visible-lg-block visible-md-block'></div>";

            finalHtml += html;
        }

        return finalHtml;
    }

    function insertItemPrice(
        html,
        pricePropName,
        priceValue
    ) {
        if (!priceValue)
            return insertProperty(
                html,
                pricePropName,
                ""
            );

        priceValue = "$" + priceValue.toFixed(2);
        return insertProperty(
            html,
            pricePropName,
            priceValue
        );
    }

    function insertItemPortionName(
        html,
        portionPropName,
        portionValue
    ) {
        if (!portionValue)
            return insertProperty(
                html,
                portionPropName,
                ""
            );

        //
    }

    global.$dc = dc;
})(window);
