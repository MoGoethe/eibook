'use strict';

function Login(req,res,next){
	var user={
		username:'admin',
		password:'admin'
	};
	/*
		通过用户名密码与数据库进行对比，
		写入登录状态 __LOGINSTATUS，用户id  __USERID
	*/
	res.locals.result = {};
	if(req.body.username==user.username && req.body.password==user.password){
		res.locals.result.status = 1;
		req.session.__USERID = 'gj8as8h5zv8fn5';
		req.session.__LOGINSTATUS = true;
		if(req.body.savestatus){
			req.session.cookie.maxAge = 3600*7*24;
		}
		next();
	}else{
		res.locals.result.status = 0;
		next();
	}
}

module.exports = Login;