const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));

console.log(buf.toString('hex'));


// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(105);
const buf10 = Buffer.alloc(10);

let len = buf1.write('www.runoob.com');
console.log(len)
console.log(buf1.toString('utf-8',4,10))
// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');


const buf7 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf7);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);

//buffer的合并
const buffer1 = Buffer.from('内容');
const buffer2 = Buffer.from('www.runoob.com');
let concatBuf = Buffer.concat([buffer1,buffer2]);
console.log('buffer的合并结果:'+concatBuf.toString())

//buffer的比较
let buffer3 = Buffer.from('abc');
let buffer4 = Buffer.from('abcdef');
let result = buffer4.compare(buffer3);
if(result <0 ) {
    console.log('之前')
}else if(result === 0) {
    console.log('====')
}else {

    console.log('之后'+ 'buffer4长度：'+buffer4.length)
}
