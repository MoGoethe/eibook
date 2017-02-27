'use strict';
//just do post action

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const router = express.Router();

router.use(cookieParser());
router.use(session({
	secret: 'eibook',
	name: 'userlogin',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
//	cookie: {maxAge: 10000 },  //设置maxAge是80000ms，即10s后session和相应的cookie失效过期
	resave: false,
	saveUninitialized: true,
}));

//import api module
//login api
const loginApi = require('../api/loginApi');
//bookDetail api
const getBookDetailApi = require('../api/getBookDetailApi');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/login',loginApi,(req,res)=>{
	res.json(res.locals.result);
});

module.exports = router;






