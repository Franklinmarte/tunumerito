/*'use strict';

/**
 * @ngdoc overview
 * @name numeroApp
 * @description
 * # numeroApp
 *
 * Main module of the application.
 *//*
angular
  .module('numeroApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

(function() {
    'use strict';

    define(function(require) {
        var angular = require('angular');

        var numeroApp = angular.module('numeroApp', []);

       
    });
})();
*/

define('numeroApp', ['angular', 'angular-route'], function(angular) {
    var numeroApp = angular.module('numeroApp', ['ngRoute']);
    numeroApp.config(function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

         numeroApp.controllerProvider = $controllerProvider;
        numeroApp.compileProvider = $compileProvider;
        numeroApp.routeProvider = $routeProvider;
        numeroApp.filterProvider = $filterProvider;
        numeroApp.provide = $provide;

       
    });
    return numeroApp;

    
});