/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .controller("HomeCtrl", function($scope, $location) {

            $scope.currentRoute = $location.path();

            $scope.goHome = function() {
                $scope.currentRoute = "/about";
            }

        });

}(jQuery, angular));