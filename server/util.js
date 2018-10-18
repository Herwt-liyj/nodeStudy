var util = require('util');


// util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。 
function Base() {
    this.name = 'base',
    this.base = '2018',
    this.sayHello = function() {
        console.log('say hello : ' + this.name);
    }
}

Base.prototype.showHello = function() {
    console.log(this.name)
}

function Sub() {
    this.name ='sub'
}

util.inherits(Sub,Base);

var newBase = new Base();
newBase.sayHello()
newBase.showHello();
console.dir(newBase);

var newSub = new Sub();
// newSub.sayHello()
//注意：Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
newSub.showHello();  //Sub只继承了Base在原型上的定义的函数，而构建函数内部创造的base 属性和 sayHellow函数都没有被 Sub继承，
//原型中定义的属性不被console.log 日志输出
console.dir(newSub);

//util.inspect()
//util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。 

function Person() {
    this.name ='Herwt',
    this.toString = function() {
        return this.name;
    }
}

var person = new Person();
console.log(util.inspect(person,true))
// console.log(util.inspect(person,true,null,true))


//util.isArray();  数组判断，成功为true,否为false
var isArr = util.isArray(new Array)

console.log(isArr)

//util.isRegExp()
var isReg = util.isRegExp({});
console.log(isReg)
//util.isError()

var isErr = new Error();
console.log('is Error : '+util.isError(new TypeError()))