var express = require('express');
var fs = require("fs");
var bodyParser = require('body-parser');
var multer  = require('multer');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/public/'}).array('image'));

app.get('/index', function (req, res) {
    res.sendFile( __dirname + "/" + "upload.html" );
 })

app.post('/upload_file',function(req,res) {
    console.log(req.files[0]);  // 上传的文件信息
    console.log(__dirname);
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{
                response = {
                    message:'File uploaded successfully', 
                    filename:req.files[0].originalname
               };
           }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
    });
})

var server =app.listen(8081,function() {
    var http = server.address().address;
    var port = server.address().port;

    console.log('server is running :' + http + ':' + port);
})