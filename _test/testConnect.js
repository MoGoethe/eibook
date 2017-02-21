var mysql  = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database:'tutorsystem'
});

connection.connect();
function test(){
	connection.query("SELECT t_username,t_uniqid FROM t_user WHERE t_username='蜡笔小新'", function(err, results) {
		if (err) throw err;
		console.log(results[0].t_username ,results[0].t_uniqid);
	});
	connection.end();
}
test();