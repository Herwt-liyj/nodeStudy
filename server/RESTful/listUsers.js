var express = require('express');
var fs = require('fs');

var app = express();

app.get('/listUsers',function(req, res) {
    console.dir(__dirname);
    console.log(__filename);
    fs.readFile(__dirname + '/' + 'users.json', 'utf-8', function(err, data) {
        console.log(data);
        if(err) console.log(err);
        res.end(data)
    })
})

var server = app.listen(8081, function() {
    var http = server.address().http;
    var port = server.address().port;
    console.log('Server is running :' + http + ':' + port);
})