

console.time("获取数据");
console.log(__filename);
console.log(__dirname)
console.timeEnd('获取数据');

//progres的全局

process.stdout.write('Hello world \n');

process.argv.forEach(function(index,val,arr) {

    console.log(index + ' : ' + val);
})
//获取执行路径
console.log(process.execPath);

//获取平台信息
console.log(process.platform)

//当前目录
console.log(process.cwd())

//当前版本
console.log(process.version)

//内存使用情况
console.dir(process.memoryUsage())