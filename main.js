var fs = require('fs');

fs.readFile('input1.txt',function(err,data) {
	if(err) {
		console.log('读取文件失败' + err)
		return 
	}
	console.log(data.toString())

});



console.log('读取文件完毕！')
