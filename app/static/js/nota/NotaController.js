(function(){
	var NotaController = function($scope,$route, $routeParams, NotaService){		

		$scope.getAll = function(){
			NotaService
				.get()
				.$promise.then(function(data){
					$scope.notas = data.notas;
				});
		}
		$scope.getNote = function() {
			NotaService
				.get({id:$routeParams.id})
				.$promise.then(function(data){
					$scope.nota=data.nota;
				})
		}
		$scope.delete = function(id){
			NotaService
				.remove({id:id})
				.$promise.then(function(data){
					console.log("delete",data);
				})
		}
	}

	angular
		.module('notas.controller',[])
		.controller('NotaController',['$scope','$route','$routeParams','NotaService',NotaController]);
}())