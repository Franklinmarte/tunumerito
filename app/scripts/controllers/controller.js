'use strict';
var numeroApp = angular.module('numeroAppController',[]);

numeroApp.controller('conteoCtrl',['$scope',function($scope){
	$scope.hola = function()
	{
		 $scope.numero = parseInt(Math.floor((Math.random() * 100) + 1))
		return $scope.numero;
	}


}])