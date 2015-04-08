/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .run(['$anchorScroll', function($anchorScroll) {
            $anchorScroll.yOffset = 15;   // always scroll by 50 extra pixels
        }])
        .controller("ProjectCtrl", ['$anchorScroll', '$location', '$scope', function($anchorScroll, $location, $scope) {

            //controll the interval for which the carousels to scroll
            $('#triptivity-android-carousel').carousel({
                interval: 6000
            });

            $('#triptivity-desktop-carousel').carousel({
                interval: 5500
            });

            $('#eggleston-designs-carousel').carousel({
                interval: 5500
            });

            //controlls the scroll to section of the projects page
            $scope.gotoAnchor = function(x) {
                var newHash = 'anchor' + x;
                if ($location.hash() !== newHash) {
                    // set the $location.hash to `newHash` and
                    // $anchorScroll will automatically scroll to it
                    $location.hash('anchor' + x);
                } else {
                    // call $anchorScroll() explicitly,
                    // since $location.hash hasn't changed
                    $anchorScroll();
                }
            };

        }]);

}(jQuery, angular));