var express = require('express');
var fs = require('fs');

var app = express();

app.get('/:id', function(req,res)  {
    fs.readFile(__dirname + '/' + 'users.json','utf-8', function(err, data) {
        if(err) console.log(err);
        data = JSON.parse(data);
        var user = data['user'+ req.params.id];
        if(!user) {
            res.type('application/json');
            res.end('暂无数据')
        }
        res.end(JSON.stringify(user));
    })
});

var server = app.listen(8081,function() {
    var http = server.address().http;
    var port = server.address().port;
    console.log('Server is running ' + http + ':' + port);
})