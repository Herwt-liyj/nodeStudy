var http = require('http');
var url = require('url');

function start(route) {
	function onRequest(request,response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for :" + pathname + " received");
		console.dir(url.parse(request.url));
		console.log('querystring.parse(queryString) : ' + url.parse(request.url))

		route(pathname)
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("hello world Router");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started")
}
exports.start = start;

// var server= http.createServer(function(request,response) {
// 	response.writeHead(200,{'Content-Type':'text/plain'});
// 	response.end('Hello world \n');

// });
// server.listen(8888);
// console.dir(server);
// console.log('server running at http://127.0.0.1:8888')


// var http = require("http");
// var url = require("url");
 
// function start() {
//   function onRequest(request, response) {
//     var pathname = url.parse(request.url).pathname;
//     console.log("Request for " + pathname + " received.");
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
//   }
 
//   http.createServer(onRequest).listen(8888);
//   console.log("Server has started.");
// }
 
exports.start = start;

