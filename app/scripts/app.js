'use strict';


    var numeroApp = angular.module('numeroApp', ['ngRoute','LocalStorageModule','numeroAppController']);
    numeroApp .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }]);
    numeroApp.config(['$routeProvider',function($routeProvider){


        $routeProvider.when('/home', {
            templateUrl: 'app/views/home.html'
         }).
        when('/home/numerouno',{
          templateUrl: 'app/views/numerouno.html'
        }).
         when('/home/signozodiacal',{
          templateUrl: 'app/views/signozodiacal.html'
        }).
         when('/home/generaruno',{
          templateUrl: 'app/views/generaruno.html'   
        }).
         when('/home/numerodos',{
          templateUrl: 'app/views/numerodos.html'
        }).
         when('/home/generados',{
          templateUrl: 'app/views/generados.html'
          
        }).when('/home/terminosycondiciones',{
          templateUrl: 'app/views/terminosycondiciones.html'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
             });
        }]);
  

    
