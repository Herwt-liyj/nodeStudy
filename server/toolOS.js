var os = require('os');

// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");
console.dir(os.networkInterfaces())
console.dir(os.cpus())

var net = require('net');

console.log(net.isIP('127.0.0.1'))

//net 创建服务器和客户端通信
var server = net.createServer(function(connection) {
    console.log(' client connected ');
    connection.on('end', function() {
        console.log('客户端关闭连接');
    });

    connection.write('Hello World\r\n');
    connection.pipe(connection);
})
server.listen(8080,function() {
    console.log('server is starting')
})