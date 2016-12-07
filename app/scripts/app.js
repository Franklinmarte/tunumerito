'use strict';


    var numeroApp = angular.module('numeroApp', ['ngRoute','numeroAppController']);
    numeroApp.config(['$routeProvider',function($routeProvider){


        $routeProvider.when('/home', {
            templateUrl: 'views/home.html'
         }).
        when('/home/numerouno',{
          templateUrl: 'views/numerouno.html'
        }).
         when('/home/signozodiacal',{
          templateUrl: 'views/signozodiacal.html'
        }).
         when('/home/generaruno',{
          templateUrl: 'views/generaruno.html',
          
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
             });
        }]);
  

    
