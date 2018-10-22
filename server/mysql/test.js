var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host	 :'127.0.0.1',
// 	user	 : 'root',
// 	password : '123456',
// 	database : 'test'
// });
// connection.connect();
// connection.query('SELECT 1 + 1 AS solution',function(error, results,fields) {
// 	if (error) throw error;
// 	console.log('The solution is : ', results[0].solution)
// })

var connection = mysql.createConnection({
	host: "localhost",
	post: 3306,
	user:'root',
	password: '123456',
	database: 'test',
	// socketPath: '/tmp/mysql.sock' // 指定套接字文件路径
	// socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
	// dialectOptions: {
	// 	socketPath: '/tmp/mysql.sock' // 指定套接字文件路径
	// }
});

connection.connect(function(err) {
	if(err){
        console.error('err connnectiing' + err.stark);
        return ;
    }
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	if (error) throw error;
	console.log('The solution is: ', results[0].solution);
});