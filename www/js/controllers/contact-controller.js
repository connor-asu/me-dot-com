/**
 * @author Connor Eggleston
 */

(function($, angular) {
    'use strict';

    angular.module("MeDotCom.Controllers")
        .controller("ContactCtrl", function($scope, $http) {

            //initialize contact variables to false
            $scope.contactSuccess = false;
            $scope.contactError = false;
            $scope.errorMessage = "";

            $scope.submitContactRequest = function() {
                //initialize contact variables to false
                $scope.contactSuccess = false;
                $scope.contactError = false;
                $scope.errorMessage = "";
                $http({
                    method  : 'POST',
                    url     : 'contact-form.php',
                    data    : $.param($scope.message),  //param method from jQuery
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
                }).success(function(data){
                    if (data.success) { //success comes from the return json object
                        //show the success message and hide any previous error messages and reset the form
                        $scope.contactError = false;
                        $scope.contactSuccess = true;
                    } else {
                        //extract all of the response error messages and add them to the scope error message
                        angular.forEach(data.errors, function(value, key) {
                            if (value) { //there is an error for this field
                                $scope.errorMessage += value + "\n";
                            }
                        });

                        //show the error message and hide any previous success messages
                        $scope.contactSuccess = false;
                        $scope.contactError = true;
                    }
                });
            };

        });
}(jQuery, angular));