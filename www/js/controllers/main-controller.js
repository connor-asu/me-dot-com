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

            $scope.navigateToPage = function(page) {
                switch (page) {
                    case 'projects':
                        $location.path('/projects');
                        break;
                    case 'contact':
                        $location.path('/contact');
                        break;
                }
                var newHash = 'top';
                if ($location.hash() !== newHash) {
                    // set the $location.hash to `newHash` and
                    // $anchorScroll will automatically scroll to it
                    $location.hash('top');
                } else {
                    // call $anchorScroll() explicitly,
                    // since $location.hash hasn't changed
                    $anchorScroll();
                }
            }

        });

}(jQuery, angular));