/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .controller("ProjectCtrl", function($scope) {

            $('.carousel').carousel({
                interval: 6000
            });

        });

}(jQuery, angular));