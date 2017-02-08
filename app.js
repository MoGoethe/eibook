var express = require('express');
var app = express();

//路由
var route = require("./route/index");

var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World!');
});

// 网站首页接受 POST 请求
app.post('/', function (req, res) {
	res.send('Got a POST request');
});

app.get('/user', function (req, res) {
	res.send('user page');
});

app.get('/mine', function (req, res) {
	res.send('personal center');
});

app.get('/book', function (req, res) {
	res.send('book page');
});


//静态资源
app.use('/static', express.static('public'));

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://127.0.0.1:3000');
});