var express = require('express');
var fs = require('fs');

var app = express();

app.get('/deleteUser/:id', function(req,res)  {
    fs.readFile(__dirname + '/' + 'users.json','utf-8', function(err, data) {
        if(err) console.log(err);
        data = JSON.parse(data);
        delete data['user' + req.params.id];
        console.log(data);
        res.end(JSON.stringify(data));
    })
});

var server = app.listen(8081,function() {
    var http = server.address().http;
    var port = server.address().port;
    console.log('Server is running ' + http + ':' + port);
})