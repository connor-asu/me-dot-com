/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .controller("ProjectCtrl", function($scope) {

            $('.carousel').carousel({
                interval: 4000
            });

        });

}(jQuery, angular));