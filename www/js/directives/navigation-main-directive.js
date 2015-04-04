/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .directive("mainNavigation", function() {

            return {
                link: function(scope, element, attrs) {
                    var activePage = scope.getCurrentRoute();
                    var defaultPage = $('.default-page');
                    switch(activePage) {
                        case "/":
                            break;
                        case "/about":
                            if (attrs.id === "about") {
                                element.addClass('active');
                            }
                            break;
                        case "/experience":
                            if (attrs.id === "experience") {
                                defaultPage.removeClass('active');
                                element.addClass('active');
                            }
                            break;
                        case "/projects":
                            if (attrs.id === "projects") {
                                defaultPage.removeClass('active');
                                element.addClass('active');
                            }
                            break;
                        case "/contact":
                            if (attrs.id === "contact") {
                                defaultPage.removeClass('active');
                                element.addClass('active');
                            }
                            break;
                        default:
                            element.parent().find('li').removeClass('active');
                            defaultPage.addClass('active');
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