var fs = require('fs');

//获取文件信息
console.log('准备打开文件')

fs.stat('input.txt','r+',function(err,stats) {
    if(err) {
        console.log('Error :' +err );
    }
    console.log('文件打开完成');
    console.log(stats);
    console.log('是否是文件：' + stats.isFile())
    console.log('是否是文件件目录： ' + stats.isDirectory())
})


//写入文件
fs.writeFile('writeOutput.txt','我是通过fs.writeFile写入的数据',function(err) {
    if(err) console.log('Error  :' + err);
    console.log('数据写入成功');
    console.log('-----------分割线-------------------')
    console.log('读取写入的数据');
    fs.readFile('writeOutput.txt',function(err,data) {
        if(err) console.log('Error  :' + err);
        console.log('读取到数据：' + data.toString())
    })
})

//删除文件
fs.unlink('output1.txt',(err,data)=> {
    if(err) console.log(err);
    console.log('删除成功')
})