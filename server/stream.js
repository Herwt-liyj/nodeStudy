var fs = require('fs');
var data= '';

//创建可读流
var readStream = fs.createReadStream('input.txt');

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