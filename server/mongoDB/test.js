

var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/runoob';

MongoClient.connect(url, function(err,db) {
    if(err) throw err;
    console.log('数据库已创建');
    var dbBase = db.db('runoob');   //数据库
    // dbBase.createCollection('site',function(err,res) {  //创建集合（表table）
    //     if(err) throw err;
    //     console.log('集合创建完毕');  //表
        
    // })
    var myobj =  [
        { name: '菜鸟工具', url: 'https://c.runoob.com', type: 'cn'},
        { name: 'Google', url: 'https://www.google.com', type: 'en'},
        { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
       ];
    // dbBase.collection('site').insertMany(myobj,function(err,res) {
    //     if(err) throw err;
    //     console.log('文档插入成功');
    //     console.log('插入的条数：' + res.insertedCount)
    //     db.close();
    // })
    var whereStr = { name: '菜鸟工具'};
    var updateStr = {$set: {url: 'www.bwoil.com'}};
    // dbBase.collection('site').find(whereStr).toArray(function(err,result) {
    //     if(err) throw err;
    //     console.log(result);
    //     db.close();
    // })

    dbBase.collection('site').updateOne(whereStr,updateStr,function(err,res) {
        if(err) throw err;
        console.log('更新成功');
        dbBase.collection('site').find(whereStr).toArray(function(err,result) {
            if(err) throw err;
            console.log(result);
            db.close();
        })
        // db.close();
    })

})