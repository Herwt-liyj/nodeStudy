var events = require('events');

//创建
var eventEmitter =  new events.EventEmitter();

var eventHandler = function() {
    console.log('eventHandler 已完成2')
    eventEmitter.emit('receivedName',{data:'111test'});
    eventEmitter.emit('onceName');
    console.log('eventHandler 已完成22222222222')
}

//绑定事件及事件的处理函数
eventEmitter.on('eventName',eventHandler);

//绑定接受事件及接受事件的处理函数
eventEmitter.on('receivedName',function(data) {
    console.log('数据接受成功44444444');
    console.log(data)
});

//多次监听同一个事件
eventEmitter.on('receivedName',function(data) {
    console.log(data);
    console.log('数据接受成功44444444333333333333')
})
//一次监听
eventEmitter.once('onceName',function() {
    console.log('once只监听一次事件111111111111111111')
})
//一次监听
eventEmitter.once('onceName',function() {
    console.log('once只监听一次事件222222222222222')
})
//一次监听
eventEmitter.once('onceName',function() {
    console.log('once只监听一次事件222222222222222')
})

var listenersCount = eventEmitter.listenerCount('eventName');
var listeners = eventEmitter.listeners('receivedName');
console.log('监听器数量：'+ listenersCount)
console.dir(listeners)

console.log("程序执行开始1");

// 触发事件
eventEmitter.emit('eventName');

//
console.log("程序执行完毕。3");
