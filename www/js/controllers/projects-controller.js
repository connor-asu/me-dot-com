/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .controller("ProjectCtrl", function($scope) {

            $('#triptivity-android-carousel').carousel({
                interval: 6000
            });

            $('#triptivity-desktop-carousel').carousel({
                interval: 5500
            });

        });

}(jQuery, angular));