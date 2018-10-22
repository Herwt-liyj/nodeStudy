// child_process.exec 使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回。

var fs = require('fs');
var child_process = require('child_process');

for(var i=1; i<=3; i++) {
    //child_process.exec 使用紫金城执行命令，缓存子进程的输出，并将子进程的输出以回调函数的参数形式返回！
    var workProcess = child_process.exec('node ./server/process/support.js '+ i, function(error,stdout,stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    })
    workProcess.on('exit',function(code) {
        console.log('子进程已退出，退出码 '+code);
    })
}