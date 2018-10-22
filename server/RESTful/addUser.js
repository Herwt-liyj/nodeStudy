var express = require('express');
var fs = require('fs');

var app = express();

var user = {
    'user5': {
        "name": "55ramesh",
        "password": "55password",
        "profession": "55clerk",
        "id": 5
    }
}

app.get('/addUser',(req, res) => {
    fs.readFile(__dirname + '/' + 'users.json', 'utf-8', function(err,data) {
        data = JSON.parse(data);
        console.log(typeof(data));
        data['user5'] = user.user5;
        res.end(JSON.stringify(data));
    }) 
})

var server = app.listen(8081, function() {
    var http = server.address().http;
    var port = server.address().port;
    console.log('Server is runngin : ' + http + ':' +port);
})