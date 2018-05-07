angular.module("ListaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, operadoras, serialGenerator, $location){
	$scope.app = "Lista Telefonica";
	$scope.operadoras = operadoras.data;

	$scope.adicionarContatos = function(contato) {
		//$scope.contatos.push(angular.copy(contato));
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContato(contato).success(function (data){
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
		$location.path("/contatos");
		});
		
	};

});