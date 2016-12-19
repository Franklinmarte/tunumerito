'use strict';


    var numeroApp = angular.module('numeroApp', ['ngRoute','LocalStorageModule','numeroAppController']);
    numeroApp .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }]);
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
        }).
         when('/home/numerodos',{
          templateUrl: 'views/numerodos.html'
        }).
         when('/home/generados',{
          templateUrl: 'views/generados.html',
          
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
             });
        }]);
  

    
