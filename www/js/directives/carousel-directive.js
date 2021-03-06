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

                        //set the variables to prepare for targeting and performing actions
                        var action = attrs.direction;
                        var target = attrs.target;
                        var carousel;

                        //target the proper carousel
                        switch(target) {
                            case 'triptivity-android': //target the android carousel
                                carousel = $('#triptivity-android-carousel');
                                break;
                            case 'triptivity-desktop': //target the desktop carousel
                                carousel = $('#triptivity-desktop-carousel');
                                break;
                            case 'eggleston-designs': //target the desktop carousel
                                carousel = $('#eggleston-designs-carousel');
                                break;
                            case 'feel-free': //target the desktop carousel
                                carousel = $('#feel-free-carousel');
                                break;
                            default:
                                break;
                        }

                        //once the carousel is targeted, perform the proper action
                        if (action === 'prev') { //go to the previous image
                            carousel.carousel('prev');
                        } else if (action === 'next') { //go to the next image
                            carousel.carousel('next');
                        }
                    });
                }
            }
        });

}(jQuery, angular));