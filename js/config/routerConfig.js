angular.module("ListaTelefonica").config(function ($routeProvider){
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html",
		controller: "ListaTelefonicaCtrl",
		resolve: {
			contatos: function (contatosAPI){
				return contatosAPI.getContatos();
			},
			operadoras: function (operadorasAPI){
				return operadorasAPI.getOperadoras();
			}
		}
	});
	$routeProvider.when("/novoContato", {
		templateUrl: "view/novoContato.html",
		controller: "novoContatoCtrl",
		resolve: {
			operadoras: function (operadorasAPI){
				return operadorasAPI.getOperadoras();
			}
		}
	});
	$routeProvider.when("/detalhesContato", {
			templateUrl: "view/detalhesContato.html",
			controller: "detalhesContatoCtrl",
		});
	$routeProvider.otherwise({redirectTo: "/contatos"});
});
