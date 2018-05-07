angular.module("ListaTelefonica").filter("name", function(){
	return function (input){
		var listaNomes = input.split(" ");
		var listaNomesFormatada = listaNomes.map(function(nome){
			if (/(da|de|do|dos)/.test(nome)){
			 return nome;
			}else if (/^(DA|DE|DO|DOS)$/.test(nome)){
				return nome.toLowerCase();
			}
			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});
		return listaNomesFormatada.join(" ");
	};
});