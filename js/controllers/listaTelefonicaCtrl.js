angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", function ($scope, contatos, operadoras, serialGenerator){
	$scope.app = "Lista Telefonica";
	$scope.contatos = contatos.data;
	$scope.operadoras = operadoras.data;
	$scope.dataNasc = [];

	var generateSerial = function(contatos){
		contatos.forEach(function (item){
			item.serial = serialGenerator.generate();
		});
	};


	$scope.adicionarContatos = function(contato) {
		//$scope.contatos.push(angular.copy(contato));
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContato(contato).success(function (data){
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
		carregarContatos();
		});
		
	};
	$scope.excluirContatos = function(contatos){
		$scope.contatos = contatos.filter(function (contato){
			if (!contato.selecionado) return contato;
		});	
	};
	$scope.isContatoSelecionado = function(contatos){
		return contatos.some(function(contato){
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	generateSerial($scope.contatos); 
});