var express = require('express');
var app = express();

//接入路由
var routerIndex = require('./routes');
var routerBook = require('./routes/book');
var routerLogin = require('./routes/login');
var routerRegister = require('./routes/register');
var routerSearch = require('./routes/search');
var routerUser = require('./routes/user');

app.use('/', routerIndex);
app.use('/book', routerBook);
app.use('/login', routerLogin);
app.use('/register', routerRegister);
app.use('/search', routerSearch);
app.use('/user', routerUser);

//静态资源
app.use('/static', express.static('public'));

//404
app.get('*', function(req, res){
	res.send('not found')
});
var server = app.listen(3000, function () {
	console.log('server listening at http://127.0.0.1:3000');
});