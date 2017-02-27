'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
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
