/**
 * @author Connor Eggleston
 */

(function($, angular) {
	'use strict';

	angular.module("MeDotCom.Configs")
		.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("about", {
                    url: "/",
                    controller: "AboutCtrl",
                    templateUrl: "partials/about.html"
                })
                .state("experience", {
                    url: "/experience",
                    controller: "ExpCtrl",
                    templateUrl: "partials/experience.html"
                })
                .state("projects", {
                    url: "/projects",
                    controller: "ProjCtrl",
                    templateUrl: "partials/projects.html"
                })
                .state("contact", {
                    url: "/contact",
                    controller: "ContactCtrl",
                    templateUrl: "partials/contact.html"
                });
        });

}(jQuery, angular));