var express = require('express');

var app = express();
app.use(express.static('public'));

app.get('/',function(req,res) {
    console.log('主页 get请求');
    res.send('主页 get请求')
})

app.post('/post_list',function(req,res) {
    res.cookie('post-cookie','HerwtTestPostCookie')
    console.log('post_list')
    res.send('post-list post请求')
})

app.get('/user',function(req,res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除操作响应')
})
app.get('/ab*cd',function(req,res) {
    console.log('正则匹配');
    res.send('正则匹配')
})

var server = app.listen(8081,function() {
    var http = server.address().address;
    var port = server.address().port;
    console.log('server is running ' + http + ':' +port)
})