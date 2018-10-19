var http = require('http');
var url = require('url');
var util = require('util');

var server = http.createServer(function(request,response) {
    response.writeHead('200',{'Content-Type': 'text/plain; charset=utf-8'});

    //解析url
    var params = url.parse(request.url,true).query;
    console.log(params)
    response.write('网站名称：'+ params.name);
    response.write('\n');
    response.write('网站地址：' + params.url);
    response.end();
})

server.listen(3000);