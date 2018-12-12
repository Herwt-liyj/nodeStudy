var https = require('http2');
var fs = require('fs');
var options = {
	key:fs.readFileSync('localhost.key'),
	cert:fs.readFileSync('localhost.crt')
}
https.createServer(options, function(request,response){
 fs.readFile(__dirname + request.url, function(err,data){
 
 	if(err) {
		response.writeHead(404);
		response.end(JSON.stringify(err));
		return;
	}
	 response.writeHead(200);
	 response.end(data);
 } )

}).listen(8080)

