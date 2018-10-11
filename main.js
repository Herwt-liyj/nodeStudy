var fs = require('fs');

fs.readFile('input.txt',function(err,data) {
	if(err) return console.error(err);
	console.log(data.toString())

});



console.log('读取文件完毕！')
