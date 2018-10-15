var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function() {
    console.log('listener1')
}

var listener2 = function() {
    console.log('listener2')
}

eventEmitter.on('connection',listener2);
eventEmitter.addListener('connection',listener1);


var eventCount = eventEmitter.listenerCount('connection');
console.log(eventCount +'个监听器监听连接事件');

// 处理 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");
eventEmitter.emit('error',(error)=> {
    console.dir(error)
});
// 触发连接事件
eventEmitter.emit('connection');


eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");