var express = require('express');
var app = express();

app.get('/',function(req,res) {
	res.cookie('cookie','Herwt');
	res.append('authorization','token');
	res.set('authorizationSet','token-set');   //set放置在append之后，会覆盖之前append设置的响应头设置
	// res.clearCookie('cookie');
	// res.download('/www.herw.com')
	res.sendStatus(200);
	res.type('application/json')
	res.send('Hello World!')
})

var server = app.listen(8081, function() {

	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://$s:$s", host,port)
})
