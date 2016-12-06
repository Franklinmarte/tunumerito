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

define('numeroApp', ['angular', 'angular-route', 'homeController'], function(angular) {
    var numeroApp = angular.module('numeroApp', ['ngRoute']);
        numeroApp.config(function($routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

     

        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
         }).
        when('/home/numerouno',{
          templateUrl: 'views/numerouno.html'
        }).
         when('/home/signozodiacal',{
          templateUrl: 'views/signozodiacal.html'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
             });
        });
         return numeroApp;
    });
  

    
