/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .directive("mainNavigation", function() {

            return {
                link: function(scope, element, attrs) {
                    var activePage = scope.currentRoute;
                    switch(activePage) {
                        case "/":
                            console.log("home");
                            break;
                        case "/about":
                            if (attrs.id === "about") {
                                element.addClass('active');
                            }
                            break;
                        case "/experience":
                            if (attrs.id === "experience") {
                                element.addClass('active');
                            }
                            break;
                        case "/projects":
                            if (attrs.id === "projects") {
                                element.addClass('active');
                            }
                            break;
                        case "/contact":
                            if (attrs.id === "contact") {
                                element.addClass('active');
                            }
                            break;
                        default:
                            element.parent().find('li').removeClass('active');
                            break;
                    }

                    element.on('click', function() {
                        //remove the active page class from all navigation items
                        element.parent().find('li').removeClass('active');
                        //add the class on to only the nav item that was clicked
                        element.addClass('active');
                    });

                }
            }
        });

}(jQuery, angular));