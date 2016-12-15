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
      
   if ($scope.tareas[4]==dia) {
    
      location=("#/home/generaruno");
   }else
   {
       delete $scope.tareas[0];
      delete $scope.tareas[1];
      delete $scope.tareas[2];
      delete $scope.tareas[3];

      
     $scope.numero = Math.floor((Math.random() * 100) + 1);
      
    //  $scope.tareas.push($scope.tarea, $scope.zodiacal.name, $scope.numero, dia);
      $scope.tareas[0] = $scope.tarea;
      $scope.tareas[1]= $scope.numero;
      $scope.tareas[2]=$scope.numero;
      $scope.tareas[3]= dia;
      $scope.tarea = '';
       location=("#/home/generaruno");
   }
     
    
    
    };
    $scope.eliminarTarea = function (index) {
      $scope.tareas.splice(index, 1);
    };    
	

}])

