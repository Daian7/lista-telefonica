var router = require('./router');

var app = router(3000);

 var operadoras = [
 		{nome: "Tim", codigo: 41, categoria: "Celular", valor: 0.5},
		{nome: "Claro", codigo: 21, categoria: "Celular", valor: 1},
		{nome: "Oi", codigo: 14, categoria: "Celular", valor: 5},
		{nome: "GVT", codigo: 25, categoria: "Fixo", valor: 3.5},
		{nome: "Embratel", codigo: 21, categoria: "Fixo", valor: 0.75}
 				];

 var contatos = [
			{id: 1, nome: "Predro", telefone: "99996666", cor: "red", data: new Date(), operadora: operadoras[0]},
			{id: 2, nome: "Luciano", telefone: "94439493", cor: "blue", data: new Date(), operadora: operadoras[1]},
			{id: 3, nome: "Rebecca", telefone: "34353453", cor: "yellow", data: new Date(), operadora: operadoras[2]}
				];

app.interceptor(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','Content-Type');
	next();
});

app.interceptor(function(req, res, next){
	res.setHeader('Content-Type', 'application/json;charset=UTF-8');
	next();
});

app.get('/operadoras', function(req, res){
	res.write(JSON.stringify(operadoras));
	res.end();
});

app.get('/contatos', function(req, res){
	 res.write(JSON.stringify(contatos)); 
	 res.end();
});

app.post('/contatos', function(req, res){
	var contato = req.body;
	contatos.push(JSON.parse(contato));
	res.end();
});

app.options('/contatos', function(req, res){
	res.end();
});


