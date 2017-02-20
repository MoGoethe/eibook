'use strict'

const express = require('express');
const consolidate= require('consolidate');

const app = express();

app.engine("html",consolidate.ejs);
app.set("view engine","html");
app.set("views",__dirname+"/views");

//静态资源访问
app.use("/css",express.static(__dirname+'/css'));
app.use("/js",express.static(__dirname+'/js'));
app.use("/img",express.static(__dirname+'/img'));
app.use("/lib",express.static(__dirname+'/lib'));

//接入路由
var routerIndex = require('./routes');
var routerBook = require('./routes/book');
var routerLogin = require('./routes/login');
var routerRegister = require('./routes/register');
var routerSearch = require('./routes/search');
var routerUser = require('./routes/user');

app.use('/', routerIndex);
app.use('/', routerBook);
app.use('/', routerLogin);
app.use('/', routerRegister);
app.use('/', routerSearch);
app.use('/', routerUser);



const server = app.listen(3001, function () {
	console.log('server listening at http://127.0.0.1:3001');
});