var express = require('express');

var app = express();

app.get('/index',function(req,res) {

        res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/process_get',function(req,res) {
    var response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    }
    console.log(response)

    res.sendFile(__dirname + '/' + 'success.html');
    
})

var server = app.listen(8081,function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("server is running :" + host + ':' + port)
})