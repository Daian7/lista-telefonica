angular.module("ListaTelefonica").factory("timesstampInterceptor", function (){
	return{
		request: function (config){
			return config;
		}
	};
});