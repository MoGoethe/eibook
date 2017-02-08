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