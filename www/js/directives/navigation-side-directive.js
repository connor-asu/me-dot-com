/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .directive("navigationSide", function() {

            return {
                link: function(scope, element, attrs) {
                    var activePage = scope.currentRoute;
                    switch(activePage) {
                        case "/":
                            element.parent().find('a').removeClass('active-page');
                            break;
                        case "/about":
                            if (attrs.id === "about") {
                                element.addClass('active-page');
                            }
                            break;
                        case "/experience":
                            if (attrs.id === "experience") {
                                element.addClass('active-page');
                            }
                            break;
                        case "/projects":
                            if (attrs.id === "projects") {
                                element.addClass('active-page');
                            }
                            break;
                        case "/contact":
                            if (attrs.id === "contact") {
                                element.addClass('active-page');
                            }
                            break;
                        default:
                            element.parent().find('li').removeClass('active-page');
                            break;
                    }

                    element.on('click', function() {

                        //remove the active page class from all navigation items
                        element.parent().parent().find('a').removeClass('active-page');
                        //add the class on to only the nav item that was clicked
                        element.addClass('active-page');
                    });

                }
            }
        });

}(jQuery, angular));