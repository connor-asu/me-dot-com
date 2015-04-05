/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .controller("ContactCtrl", function($scope, $http) {

            $scope.submitContactRequest = function() {
                console.dir($scope.message);
                $http({
                    method  : 'POST',
                    url     : 'contact-form.php',
                    data    : $.param($scope.message),  //param method from jQuery
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
                }).success(function(data){
                    console.dir(data);
                    if (data.success) { //success comes from the return json object
                        //$scope.submitButtonDisabled = true;
                        //$scope.resultMessage = data.message;
                        //$scope.result='bg-success';
                    } else {
                        //$scope.submitButtonDisabled = false;
                        //$scope.resultMessage = data.message;
                        //$scope.result='bg-danger';
                    }
                });
            };
        });
}(jQuery, angular));