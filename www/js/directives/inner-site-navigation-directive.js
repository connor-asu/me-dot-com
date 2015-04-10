/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .directive("innerSiteNavigation", function() {

            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var target = '#'+attrs.target; //set the origin page
                    var origin = '#'+attrs.origin; //set the target page to navigate to
                    element.on('click', function() {
                        //remove the active class on the sub banner from the origin
                        $(origin).removeClass('active');

                        //add the active class to the sub banner to the target
                        $(target).addClass('active');
                    });
                }
            }
        });

}(jQuery, angular));