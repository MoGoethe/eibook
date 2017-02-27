'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');


const router = express.Router();
router.use(session({
	secret: 'eibook',
	name: 'userlogin', 
	resave: false,
	saveUninitialized: true,
}));
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/login', function(req, res, next) {
	if(typeof req.session.__LOGINSTATUS !== 'undefined'){
		//已登录则直接跳转到主页
		res.redirect("/");
		return false;
	}
        	res.render('login',{name:"Ei'BOOK"});
});

module.exports = router;
