/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .controller("HomeCtrl", function($scope, $location) {

            $scope.getCurrentRoute = function() {
                return $location.path();
            }

        });

}(jQuery, angular));