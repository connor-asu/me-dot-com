/**
 * @author Connor Eggleston
 */

(function($, angular) {
	'use strict';

	angular.module("MeDotCom.Configs")
		.config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    controller: "HomeCtrl",
                    templateUrl: "partials/about.html"
                })
                .state("about", {
                    url: "/about",
                    controller: "AboutCtrl",
                    templateUrl: "partials/about.html"
                })
                .state("experience", {
                    url: "/experience",
                    controller: "ExperienceCtrl",
                    templateUrl: "partials/experience.html"
                })
                .state("projects", {
                    url: "/projects",
                    controller: "ProjectCtrl",
                    templateUrl: "partials/projects.html"
                })
                .state("contact", {
                    url: "/contact",
                    controller: "ContactCtrl",
                    templateUrl: "partials/contact.html"
                });
        });

}(jQuery, angular));