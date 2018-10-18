var fs = require('fs');
var data= '';

//创建可读流
var readStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('output.txt');

//设置可读流编码
readStream.setEncoding('UTF8');

//处理事件,当有数据时触发data事件
readStream.on('data',function(chunk) {
    data += chunk;
    console.log('data事件开始')
})

//处理结束事件
readStream.on('end',() => {
    console.log(data);
})

//处理错误事件
readStream.on('error',(err)=> {
    console.log(err.stack)
})

console.log('调用结束')

//写入流
let writeData = '写入数据流测试testtteest';

writeStream.write(writeData,'UTF8');

// 标记文件末尾
writeStream.end();

//写入流处理事件
writeStream.on('finish',()=> {
    console.log('写入完成')
})

//管道
var readStream1 = fs.createReadStream('output.txt');
var writeStream1 = fs.createWriteStream('output1.txt');
readStream1.pipe(writeStream1);

//链式流
