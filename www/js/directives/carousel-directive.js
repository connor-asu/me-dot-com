/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .directive("carouselAction", function() {

            return {
                link: function(scope, element, attrs) {
                    element.on('click', function() {
                        var action = attrs.direction;
                        var carousel = $('.carousel');
                        switch(action) {
                            case 'prev': //go to the previous carousel image
                                carousel.carousel('prev');
                                break;
                            case 'next': //got o teh next carousel image
                                carousel.carousel('next');
                                break;
                            default:
                                break;
                        }
                    });
                }
            }
        });

}(jQuery, angular));