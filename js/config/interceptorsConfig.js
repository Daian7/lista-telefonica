angular.module("ListaTelefonica").config(function ($httpProvider){
	$httpProvider.interceptors.push("timestampInterceptor");
});