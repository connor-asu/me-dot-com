/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .directive("defaultPage", function() {

            return {
                link: function(scope, element, attrs) {
                    var nav = $('.nav-links');
                    element.on('click', function() {
                        nav.find('li').removeClass('active');
                        nav.find('.default-page').addClass('active');
                    });
                }
            }
        });

}(jQuery, angular));