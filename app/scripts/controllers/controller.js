'use strict'; 
var numeroApp = angular.module('numeroAppController',[]);

numeroApp.controller('conteoCtrl',['$scope','$location','localStorageService',function($scope,$location,localStorageService){
	 var tareasEnAlmacen = localStorageService.get('tareas'); 
    $scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
    $scope.$watch('tareas', function () {
       localStorageService.add('tareas', $scope.tareas.join('\n'));
       }, true);

     var fecha = new Date();
     var dia = fecha.getDay()

    $scope.addTarea = function () {
      
    	$scope.numero = Math.floor((Math.random() * 100) + 1);
      debugger
      $scope.tareas.push($scope.tarea, $scope.zodiacal.name, $scope.numero, dia);
      $scope.tarea = '';
       location=("#/home/generaruno");
     
    
    };
    $scope.eliminarTarea = function (index) {
      $scope.tareas.splice(index, 1);
    };    
	

}])

