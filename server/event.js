var events = require('events');

//创建
var eventEmitter =  new events.EventEmitter();

var eventHandler = function() {
    console.log('eventHandler 已完成2')
    eventEmitter.emit('receivedName',{data:'111test'});
    console.log('eventHandler 已完成22222222222')
}

//绑定事件及事件的处理函数
eventEmitter.on('eventName',eventHandler);

//绑定接受事件及接受事件的处理函数
eventEmitter.on('receivedName',function(data) {
    console.log('数据接受成功44444444');
    console.log(data)
});

console.log("程序执行开始1");

// 触发事件
eventEmitter.emit('eventName');

//
console.log("程序执行完毕。3");
