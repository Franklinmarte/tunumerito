 'use strict'; 
var numeroApp = angular.module('numeroAppController',[]);

numeroApp.controller('conteoCtrl',['$scope','$location','localStorageService','$http',function($scope,$location,localStorageService,$http){
	 var tareasEnAlmacen = localStorageService.get('tareas'); 
    $scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
    $scope.$watch('tareas', function () {
       localStorageService.add('tareas', $scope.tareas.join('\n'));
       }, true);
    $scope.atras=function()
    {
      window.history.back();
    }
     var fecha = new Date();
     var dia = fecha.getDay()

    $scope.a = function () {
      
   if ($scope.tareas[3]==dia) {
    
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
      $http.post("app/config/insertar.php",{
      'nombre':$scope.tarea,
      'signo':$scope.zodiacal.name,
      'fecha':$scope.valueofdate,
      'numero':$scope.numero
      }).success(function(data,status,headers,config){
            console.log("data insert succesfully");
       });
      $scope.tarea = '';
      location=("#/home/generaruno");
   }
   };
  

}]);

numeroApp.controller('conteoDos',['$scope','$location','localStorageService','$http',function($scope,$location,localStorageService,$http){
   var tareasdos = localStorageService.get('dos'); 
    $scope.dos = tareasdos && tareasdos.split('\n') || [];
    $scope.$watch('dos', function () {
       localStorageService.add('dos', $scope.dos.join('\n'));
       }, true);

 var fecha_dos = new Date();
     var dia_dos = fecha_dos.getDay()

    $scope.b = function () {
      
   if ($scope.dos[3]==dia_dos) {
    
      location=("#/home/generados");
      debugger
   }else

{
       delete $scope.dos[0];
      delete $scope.dos[1];
      delete $scope.dos[2];
      delete $scope.dos[3];

      
     $scope.numero = Math.floor((Math.random() * 100) + 1);
     $scope.numero_dos = Math.floor((Math.random() * 100) + 1);
      
    
      $scope.dos[0] = $scope.nombre;
      $scope.dos[1]= $scope.numero;
      $scope.dos[2]=$scope.numero_dos;
      $scope.dos[3]= dia_dos;
       $http.post("app/config/insertar_pale.php",{
      'nombre':$scope.nombre,
      'signo':$scope.zodiacal.name,
      'fecha':$scope.valueofdate,
      'numero':$scope.numero,
      'numero_dos': $scope.numero_dos
    }).success(function(data,status,headers,config){
            console.log("data insert succesfully");
       
     });
           
      $scope.nombre = '';
       location=("#/home/generados");
   }
     
        
} 
}])
numeroApp.controller('importarCtrl', ['$scope','$http',function($scope,$http){
  $scope.leidsa = function()
  {
      $http.get('app/config/leidsa.php').success(function(datos){
      $scope.quiniela = datos

      });
  }
  $scope.leidsa();
  $scope.nacional = function()
  {
      $http.get('app/config/nacional.php').success(function(datos){
      $scope.nacional = datos

      });
  }
  $scope.nacional();


}])

