function saytest(name) {
    console.log(name);
}

function execute(fn,name) {
    console.log('执行函数，函数作为参数传递进入')
    fn(name);
}

execute(function(val) {
    console.log('匿名函数的调用')
    console.log(val);
},'HerwtFnName');