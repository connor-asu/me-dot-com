/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .controller("HomeCtrl", function($scope, $location) {

            $scope.currentRoute = $location.path();

        });

}(jQuery, angular));