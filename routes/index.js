var express = require('express');

var router = express.Router();
const data = function(req,res,next){
	'use strict';
	const dataArr = [1,21,2312,32,323,23,5];
	res.locals.name = "EI'BOOK";
	next();
}
/*
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
router.get('/',data,function(req, res, next) {
	res.render('index');
});

module.exports = router;