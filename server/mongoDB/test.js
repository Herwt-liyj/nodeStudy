

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
        { _id: 154, name: '笔记本电脑' },
        { _id: 155, name: '耳机' },
        { _id: 156, name: '台式电脑' }
      ];
    //add插入文档到集合（行列到表中）
    // dbBase.collection('products').insertMany(myobj,function(err,res) {
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

    // dbBase.collection('site').updateOne(whereStr,updateStr,function(err,res) {
    //     if(err) throw err;
    //     console.log('更新成功');
    //     dbBase.collection('site').find(whereStr).toArray(function(err,result) {
    //         if(err) throw err;
    //         console.log(result);
    //         db.close();
    //     })
    //     // db.close();
    // })
    //创建集合（表table）
    // dbBase.createCollection('products',function(err,res) { //创建集合（表table）
    //     if(err) throw err;
    //     console.log('集合（表table）创建完毕')
    // })

    //删除集合表
    // dbBase.collection('testdrop').drop(function(err,delOk) {
    //     if(err) throw err;
    //     if(delOk) console.log('testdrop已删除OK')
    //     db.close();
    // })
    
    // 连接操作
    // mongoDB 不是一个关系型数据库，但我们可以使用 $lookup 来实现左连接。
    dbBase.collection('orders').aggregate(
        {$lookup :{
            from: 'products',   //右集合  右表
            localField:'product_id',  //左集合，左边中的字段
            foreignField: '_id', // 右集合字段
            as: 'orderDetails'
        }}
    ).toArray(function(err,res) {
        if(err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    })
})