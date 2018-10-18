var fs = require('fs');
var zlib = require('zlib');

var readStream = fs.createReadStream('input.txt');

// readStream.pipe(zlib.createGzip())
//           .pipe(fs.createWriteStream('input1.txt.gz'));


console.log('文件压缩成功');         


//解压缩文件

var  readStream1 = fs.createReadStream('input1.txt.gz');

readStream1.pipe(zlib.createGunzip())
            .pipe(fs.createWriteStream('inputUnGZ1.txt'));



console.log('解压缩完成')