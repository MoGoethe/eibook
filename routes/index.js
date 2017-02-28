var express = require('express');

var router = express.Router();
/*const data = function(req,res,next){
	'use strict';
	const dataArr = [1,21,2312,32,323,23,5];
	res.locals.name = "EI'BOOK";
	next();
}

	这里的data可以是任意的js数据
	{
		book:json,
		name:name,
		fun:functon(){
				return xxx;
			}
		some:project;
	}
*/

//第二个参数必须是一个函数；
function data(req,res,next){
	res.locals.data = {};
	if(typeof req.session.__LOGINSTATUS !== 'undefined' && typeof req.session.__USERID !== 'undefined'){
		res.locals.data.login_status = req.session.__LOGINSTATUS;
		res.locals.data.user_id = req.session.__USERID;
		next();
		return false;
	}
	res.locals.data.login_status = false;
	next();
}

router.get('/',data,function(req, res, next) {
	res.render('index');
});

module.exports = router;