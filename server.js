'use strict'

const express = require('express');
const consolidate= require('consolidate');

//创建哎服务
const app = express();

//模板引擎设置
app.engine("html",consolidate.ejs);
app.set("view engine","html");
app.set("views",__dirname+"/views");

//静态资源访问
app.use("/css",express.static(__dirname+'/css'));
app.use("/js",express.static(__dirname+'/js'));
app.use("/img",express.static(__dirname+'/img'));
app.use("/lib",express.static(__dirname+'/lib'));

//接入路由
const routerIndex = require('./routes');		//首页
const routerBook = require('./routes/book');		//书籍详情页
const routerLogin = require('./routes/login');		//登录页
const routerRegister = require('./routes/register');	//注册
const routerSearch = require('./routes/search');	//查询结果页
const routerUser = require('./routes/user');		//用户中心
const routerDiscover = require('./routes/discover');	//发现页
const routerNotifications = require('./routes/notifications');	//消息页面
const routerClassify = require('./routes/classify');	//消息页面

//挂载路由
app.use('/', routerIndex);
app.use('/', routerBook);
app.use('/', routerLogin);
app.use('/', routerRegister);
app.use('/', routerSearch);
app.use('/', routerUser);
app.use('/', routerDiscover);
app.use('/', routerNotifications);
app.use('/', routerClassify);

//启动服务
const server = app.listen(3001, function () {
	console.log('server listening at http://127.0.0.1:3001');
});